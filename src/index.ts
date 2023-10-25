import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import devPlugin from './dev-tools';

const app = new Elysia();
app
  .use(
    devPlugin({
      socketConfig: {
        autoReload: true,
        path: '/dev',
      },
    }),
  )
  // @ts-ignore
  .use(staticPlugin({ path: 'public' }))
  .get('/', () => {
    return Bun.file('public/index.html');
  })
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
