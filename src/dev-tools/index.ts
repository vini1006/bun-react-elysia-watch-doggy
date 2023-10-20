import type { Elysia } from 'elysia';
import type { BuildConfig } from 'bun';
import type { SocketConfig } from './watcher/type';
import { attachWatcher } from './watcher';

export default (buildConfig: BuildConfig, socketConfig?: SocketConfig) => (app: Elysia) => {
  if (process.env.ENVIRONMENT !== 'development') return app;

  // prettier-ignore
  return app
    .use(attachWatcher(buildConfig, socketConfig))
};
