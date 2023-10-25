import type { Elysia } from 'elysia';
import type { DevBuildConfig } from '@/bundler';

import { watch } from 'fs';
import _ from 'lodash/fp';

import { buildAppDevelopment, entryPoints } from '@/bundler';
import path from 'path';

const environment = process.env.ENVIRONMENT;

export const attachWatcher =
  (devBuildConfig: DevBuildConfig) => (app: Elysia) => {
    if (environment !== 'development') return app;

    devBuildConfig = {
      socketConfig: {
        autoReload: devBuildConfig.socketConfig.autoReload ?? true,
        path: devBuildConfig.socketConfig.path ?? 'dev',
      },
    };

    const build = builder(devBuildConfig);
    build().then(_.noop);

    const watcher = watch(path.dirname(entryPoints[0]), {
      recursive: true,
    });

    return app.ws(devBuildConfig.socketConfig.path, {
      open(ws) {
        watcher.on(
          'change',
          _.debounce(100, () => build().then(() => ws.send('reload'))),
        );
      },
      close() {
        watcher.removeAllListeners('change');
      },
    });
  };

const builder = (devBuildConfig: DevBuildConfig) => () => {
  return buildAppDevelopment(devBuildConfig).then(_.noop);
};
