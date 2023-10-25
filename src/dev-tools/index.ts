import type { Elysia } from 'elysia';
import { attachWatcher } from './watcher';
import { DevBuildConfig } from '@/bundler';
import { v4 } from 'uuid';
import { URL } from 'url';

export default (devBuildConfig: DevBuildConfig) => (app: Elysia) => {
  if (process.env.ENVIRONMENT !== 'development') return app;

  // prettier-ignore
  return app
    .use(attachWatcher(devBuildConfig))
    .derive(({request, cookie: { socketID}}) => {
      if (new URL(request.url).pathname === '/') {
        socketID.set({
          httpOnly: true,
          value: v4(),
        });
      }

      return { isDev: true };
    });
};
