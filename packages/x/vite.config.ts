import {defineConfig} from 'vitest/config';
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
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['json', 'html'],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    }
  },
});
