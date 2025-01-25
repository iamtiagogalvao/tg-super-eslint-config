import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import sonarjsPlugin from 'eslint-plugin-sonarjs'
import unicornPlugin from 'eslint-plugin-unicorn'
import prettierPlugin from 'eslint-plugin-prettier'
import * as dependencyPlugin from 'eslint-plugin-depend'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments'

/**
 * Global Plugins
 */
export const tgPlugins = {
  '@typescript-eslint': tsEslintPlugin,
  '@eslint-community/eslint-comments': eslintCommentsPlugin,
  sonarjs: sonarjsPlugin,
  unicorn: unicornPlugin,
  depend: dependencyPlugin,
  jsdoc: jsdocPlugin,
  prettier: prettierPlugin
}
