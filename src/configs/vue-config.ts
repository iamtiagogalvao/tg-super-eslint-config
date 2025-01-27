import vuePlugin from 'eslint-plugin-vue'
import vueI18nPlugin from '@intlify/eslint-plugin-vue-i18n'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import { tgIgnores } from './ignores.js'
import globals from 'globals'
import { tgPlugins } from './plugins.js'
import { tgRuleList } from './rules.js'
import { TgSuperEslintConfigOptions } from '../interfaces/index.js'
import { NO_CONFIG } from '../utils/globals.js'

/**
 * Vue Config Rules Overrides *
 */
const vueRuleOverrides = {
  'vue/multi-word-component-names': 'off',
  'unicorn/prefer-query-selector': 'off',
  'unicorn/filename-case': 'off',
  'unicorn/prevent-abbreviations': 'off'
}

/**
 * Generated Vue Config based on the options passed.
 * @param {TgSuperEslintConfigOptions} options - The options object.
 * @returns - The vue config object.
 */
const tgVueConfig = (options: TgSuperEslintConfigOptions) => {
  if (!options.useVue) {
    return NO_CONFIG
  }

  if (options.vueI18nDir) {
    vueConfig.settings = {
      ...vueConfig.settings,
      'vue-i18n': {
        localeDir: `${options.vueI18nDir}*.{json,json5,yaml,yml}`
      }
    }
  }

  if (options.useGlobalRulesWithVue) {
    vueConfig.plugins = { ...vueConfig.plugins, ...tgPlugins }
    vueConfig.rules = { ...vueConfig.rules, ...tgRuleList, ...vueRuleOverrides }
  }

  return vueConfig
}

/**
 * The base vue config
 */
const vueConfig = {
  files: ['**/*.vue'],

  ignores: tgIgnores,

  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.builtin
    }
  },
  plugins: {
    vue: vuePlugin,
    '@intlify/vue-i18n': vueI18nPlugin
  },

  settings: {},

  rules: {
    ...vuePlugin.configs['vue3-recommended'].rules,
    ...vueI18nPlugin.configs.recommended.rules,
    'vue/valid-v-slot': 'warn',
    'vue/no-deprecated-slot-attribute': 'warn'
  }
}

export { tgVueConfig, vueConfig }
