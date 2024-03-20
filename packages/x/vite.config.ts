import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      name: 'x$tend',
      formats: ['umd'],
    },
    sourcemap: true,
    minify: true,
  },
});
