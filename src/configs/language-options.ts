import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

/**
 * Language Options
 */
export const tgLanguageOptions = {
  parser: tsParser,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.builtin
  }
}
