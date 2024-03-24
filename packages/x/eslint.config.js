// @ts-check

import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  {
    ignores: ['**/dist/**', '**/coverage/**'],
  },
  eslint.configs.all,
  ...tsEslint.configs.all,
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: true,
      },
    }
  },
  {
    // disable type-aware linting on JS files
    files: ['**/*.js'],
    ...tsEslint.configs.disableTypeChecked,
  },
);
