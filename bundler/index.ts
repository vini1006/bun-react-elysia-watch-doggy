import type { SocketPluginConfig } from './plugins';
import { socketAttachPlugin } from './plugins';

export const entryPoints = ['client/index.tsx'];

export interface DevBuildConfig {
  socketConfig: SocketPluginConfig;
}

export const buildAppProduction = () =>
  Bun.build({
    entrypoints: entryPoints,
    outdir: 'public/dist',
  });

export const buildAppDevelopment = (devBuildConfig: DevBuildConfig) =>
  Bun.build({
    entrypoints: entryPoints,
    outdir: 'public/dist',
    plugins: [socketAttachPlugin(devBuildConfig.socketConfig)],
    publicPath: '/public/dist/',
  }).then((output) => {
    console.log('run bundle');

    if (!output.success) {
      console.log(output);
    }

    return output;
  });
