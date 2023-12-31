import type { Elysia } from 'elysia';
import type { DevBuildConfig } from '@/bundler';
import EventEmitter from 'events';

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

    const eventPass = new EventEmitter();

    watcher.on(
      'change',
      _.debounce(100, () => build().then(() => eventPass.emit('reload'))),
    );

    const funkMap = new Map<string, () => void>();

    return app.ws(devBuildConfig.socketConfig.path, {
      open(ws) {
        const socketID = ws.data.cookie.socketID?.value;
        if (typeof socketID === 'string' && !funkMap.has(socketID)) {
          const sendReload = () => ws.send('reload');
          eventPass.addListener('reload', sendReload);
          funkMap.set(socketID, sendReload);
        }
      },
      close(ws) {
        const socketID = ws.data.cookie.socketID?.value;
        if (typeof socketID === 'string' && funkMap.get(socketID)) {
          const fn = funkMap.get(socketID) || function () {};
          eventPass.removeListener('reload', fn);
          funkMap.delete(socketID);
        }
      },
    });
  };

const builder = (devBuildConfig: DevBuildConfig) => () => {
  return buildAppDevelopment(devBuildConfig).then(_.noop);
};
