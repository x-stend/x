// @ts-check

import esLint from '@eslint/js';
import tsEsLint from 'typescript-eslint';
import { URL } from 'node:url';

const tsconfigRootDir = new URL(import.meta.url)
  ?.pathname
  ?.replace(/[^/]+$/, '');

export default tsEsLint.config(
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir,
      },
    },
  },
  esLint.configs.all,
  ...tsEsLint.configs.all,
);
