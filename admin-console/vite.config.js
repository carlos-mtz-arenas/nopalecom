import alias from '@rollup/plugin-alias';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: ['src/material-ui.js', 'src/app-main.js', 'index.html'],
      output: [
        {
          format: 'es',
          dir: 'dist',
        }
      ],
    }
  },
  plugins: [
    alias({
      entries: [
        // higher level
        { find: '@core', replacement: '../../core' },
        // products module imports
        { find: "@products/components", replacement: "../components" },
        { find: '@products/handlers', replacement: '../handlers' },
        { find: '@products/pages', replacement: '../pages' },
        { find: "@stores/components", replacement: "../components" },
        { find: '@stores/handlers', replacement: '../handlers' },
        { find: '@stores/pages', replacement: '../pages' },
      ]
    })
  ],
});
