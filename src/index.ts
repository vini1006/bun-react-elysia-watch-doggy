import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import devPlugin from './dev-tools';

const app = new Elysia();
app
  .use(
    devPlugin(
      {
        entrypoints: ['client/index.tsx'],
        outdir: 'public/dist',
      },
      {
        path: 'dev',
      },
    ),
  )
  .use(staticPlugin())
  .get('/', () => {
    return Bun.file('public/index.html');
  })
  .listen(8080);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
