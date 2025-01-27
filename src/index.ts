/*---------------------------------------------------*
|  TG Super ESLint Config  |  MIT License            |
|  © 2025 Tiago M Galvão  |  https://tiagogalvao.com |
*---------------------------------------------------*/

import { TgSuperEslintConfigOptions } from './interfaces/index.js'
import { tgPrettierConfig } from './configs/prettier-config.js'
import { tgVueConfig } from './configs/vue-config.js'
import { tgPlugins } from './configs/plugins.js'
import { tgRuleList } from './configs/rules.js'
import { tgLanguageOptions } from './configs/language-options.js'
import { tgIgnores } from './configs/ignores.js'

/**
 * The super eslint config.
 * @param {TgSuperEslintConfigOptions} options - The options object.
 * @returns - The super eslint config.
 */
export function tgSuperEslintConfig(options: TgSuperEslintConfigOptions = {}) {
  return [
    // =======================[ MAIN CONFIG ]=======================

    {
      files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],

      ignores: tgIgnores,

      languageOptions: tgLanguageOptions,

      plugins: tgPlugins,

      rules: tgRuleList
    },

    // =======================[ VUE CONFIG (Optional) ]=======================

    tgVueConfig(options),

    // =======================[ OVERRIDES ]=======================

    {
      files: ['**/*.d.ts'],
      rules: {
        'jsdoc/require-jsdoc': 'off'
      }
    },

    // =======================[ PRETTIER CONFIG ]=======================
    tgPrettierConfig
  ]
}
