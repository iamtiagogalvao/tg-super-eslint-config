import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginSonarjs from 'eslint-plugin-sonarjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginJsdoc from 'eslint-plugin-jsdoc'
import eslintPluginDepend from 'eslint-plugin-depend'
import eslintPluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
// import eslintPluginTypescript from "@typescript-eslint/eslint-plugin"
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'

export default [
  // =======================[ Global ]=======================
  {
    ignores: ['node_modules', 'dist'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  // =======================[ Typescript ]=======================
  // eslintPluginTypescript.configs.recommended,

  // =======================[ Prettier ]=======================
  eslintPluginPrettier,

  // =======================[ Sonar ]=======================
  eslintPluginSonarjs.configs.recommended,

  // =======================[ Unicorn ]=======================
  eslintPluginUnicorn.configs['flat/recommended'],

  // =======================[ JSDoc ]=======================
  eslintPluginJsdoc.configs['flat/recommended-typescript'],

  // =======================[ Dependencies ]=======================
  eslintPluginDepend.configs['flat/recommended'],

  // =======================[ EsLint Comments ]=======================
  eslintPluginEslintComments.recommended,

  // =======================[ Prettier Config ]=======================
  eslintConfigPrettier
]
