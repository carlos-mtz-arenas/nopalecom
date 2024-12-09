import alias from '@rollup/plugin-alias';

export default {
  plugins: [
    alias({
      entries: [
        // higher level
        { find: '@core', replacement: '../../core' },
        // products module imports
        { find: "@products/components", replacement: "../components" },
        { find: '@products/handlers', replacement: '../handlers' },
        { find: '@products/pages', replacement: '../pages' },
      ]
    })
  ],
};
