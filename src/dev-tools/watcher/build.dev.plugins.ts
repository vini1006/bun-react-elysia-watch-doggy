import type { BunPlugin, PluginBuilder } from 'bun';
import type { SocketConfig } from './type';
import fs from 'fs';

export const socketAttachPlugin = (socketConfig: SocketConfig): BunPlugin => ({
  name: 'socket-attach',
  setup(build: PluginBuilder) {
    build.onLoad({ filter: /index.tsx/ }, async (args) => {
      const modifiedContent = await fs.promises.readFile(args.path, { encoding: 'utf8' }).then(
        (originalContent) => `
          ${originalContent}
          ${socketScripts(socketConfig)}
        `,
      );

      return {
        loader: 'tsx',
        contents: modifiedContent,
      };
    });
  },
});

const socketScripts = (socketConfig: SocketConfig) => `
  (() => {
      let __socket;
      __initSocket();
    
      function __initSocket () {
        __socket = new WebSocket('ws://localhost:8080${socketConfig.path}');
        
        __socket.addEventListener('open', (e) => {
          console.log('🚀watching client 🚀');
        });
          
        __socket.addEventListener('close', (e) => {
          console.log('🚀watching client closed 🚀');
          if (${socketConfig.reconnect}) {
            __socket.close();
            setTimeout(() => __initSocket(), ${socketConfig.reconnectionDelay});
          }
        });
          
        __socket.addEventListener('message', (e) => {
          location.reload();
        });
      }
  })();
`;
