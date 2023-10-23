import type { BunPlugin, PluginBuilder } from 'bun';
import fs from 'fs';

export type SocketPluginConfig = {
  autoReload: boolean;
  path: string;
};

export const socketAttachPlugin = (
  socketConfig: SocketPluginConfig,
): BunPlugin => ({
  name: 'socket-attach',
  setup(build: PluginBuilder) {
    build.onLoad({ filter: /index.tsx/ }, async (args) => {
      const modifiedContent = await fs.promises
        .readFile(args.path, { encoding: 'utf8' })
        .then(
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

const socketScripts = (socketConfig: SocketPluginConfig) => `
  (() => {
      let __socket;
      let failedCount = 0;
      
      __initSocket();
    
      function __initSocket () {
        __socket = new WebSocket('ws://localhost:8080${socketConfig.path}');
        
        __socket.addEventListener('open', (e) => {
          console.log('🚀watching client 🚀');
        });
          
        __socket.addEventListener('close', (e) => {
          console.log('🚀watching client closed 🚀');
          if (${socketConfig.autoReload} && failedCount < 5) {
            __socket.close();
            setTimeout(() => __initSocket(), 500);
          }
        });
          
        __socket.addEventListener('message', (e) => {
          location.reload();
        });
        
        __socket.addEventListener('error', (e) => {
          failedCount++;
        });
      }
  })();
`;
