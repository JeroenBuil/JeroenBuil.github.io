import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,jsx}'], plugins: { js }, extends: ['js/recommended'], languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'warn',
      'quotes': ['warn', 'single'],
      'semi': ['warn', 'always'],
      'eqeqeq': ['error', 'always'],
      'no-console': 'warn',
      'indent': ['error', 2],
      'no-var': 'error',
    },
  },
  pluginReact.configs.flat.recommended,
]);
