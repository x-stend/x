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
      name: '$x-stend',
      formats: ['umd'],
    },
    sourcemap: true,
    minify: true,
  },
});
