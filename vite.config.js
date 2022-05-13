import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    base: './',
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  });
};
