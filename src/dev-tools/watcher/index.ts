import type { Elysia } from 'elysia';
import type { BuildConfig } from 'bun';
import type { SocketConfig } from './type';

import { watch } from 'fs';
import _ from 'lodash/fp';
import { socketAttachPlugin } from './build.dev.plugins';
import path from 'path';

const environment = process.env.ENVIRONMENT;

export const attachWatcher =
  (buildConfig: BuildConfig, socketConfig: SocketConfig | undefined = {}) =>
  (app: Elysia) => {
    if (environment !== 'development') return app;

    socketConfig = {
      path: path.resolve('/', socketConfig.path as string),
      reconnect: socketConfig.reconnect ?? true,
      reconnectionDelay: socketConfig.reconnectionDelay ?? 500,
    };

    const build = builder({ ...buildConfig, plugins: [socketAttachPlugin(socketConfig)] });
    build().then(_.noop);

    let fn: () => void;
    const watcher = watch('client/', { recursive: true });
    return app.ws(socketConfig.path as string, {
      open(ws) {
        watcher.on('change', (fn = _.debounce(10, () => build().then(() => ws.send('reload')))));
      },
      close() {
        if (!!fn) {
          watcher.off('change', fn);
        }
      },
    });
  };

const builder = (buildConfig: BuildConfig) => () => Bun.build(buildConfig).then(_.noop);
