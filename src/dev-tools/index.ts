import type { Elysia } from 'elysia';
import { attachWatcher } from './watcher';
import { DevBuildConfig } from '@/bundler';

export default (devBuildConfig: DevBuildConfig) => (app: Elysia) => {
  if (process.env.ENVIRONMENT !== 'development') return app;

  // prettier-ignore
  return app
    .use(attachWatcher(devBuildConfig))
};
