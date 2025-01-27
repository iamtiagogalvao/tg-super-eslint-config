import * as tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import * as sonarjsPlugin from 'eslint-plugin-sonarjs'
import * as unicornPlugin from 'eslint-plugin-unicorn'
import * as dependencyPlugin from 'eslint-plugin-depend'

/**
 * Global Rules List *
 */
export const tgRuleList = {
  // =======================[ Typescript ]=======================
  ...tsEslintPlugin.configs.recommended?.rules,

  // =======================[ Sonar JS ]=======================
  ...sonarjsPlugin.configs.recommended?.rules,

  // =======================[ Unicorn ]=======================
  ...unicornPlugin.configs.recommended.rules,

  // =======================[ Dependency Plugin ]=======================
  ...dependencyPlugin.configs.recommended.rules,

  // =======================[ Code Quality / Style ]=======================

  'max-depth': ['warn', 4],
  'max-lines-per-function': ['warn', 50],
  complexity: ['warn', { max: 21 }],
  semi: ['error', 'never'],
  'no-console': ['warn', { allow: ['info', 'error'] }],
  'no-undef': 'error',
  eqeqeq: ['error', 'always'],
  'no-eval': 'error',
  curly: ['error', 'all'],
  indent: ['error', 2, { SwitchCase: 1 }],
  quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }
  ],
  'no-var': 'error',
  'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
  'max-params': ['warn', 4],
  'comma-dangle': ['error', 'never'],

  // =======================[ Typescript Enforcements ]=======================

  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'warn',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }
  ],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: true,
      allowConciseArrowFunctionExpressionsStartingWithVoid: false
    }
  ],

  // =======================[ JSDocs ]=======================

  'jsdoc/check-alignment': 'error',
  'jsdoc/check-param-names': 'error',
  'jsdoc/check-tag-names': 'error',
  'jsdoc/check-types': 'error',
  'jsdoc/require-description': 'warn',
  'jsdoc/require-jsdoc': [
    'error',
    {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: false,
        FunctionExpression: false
      }
    }
  ],
  'jsdoc/require-param': 'error',
  'jsdoc/require-param-description': 'warn',
  'jsdoc/require-returns': 'error',
  'jsdoc/require-returns-description': 'warn',
  'jsdoc/require-returns-type': 'error',

  // =======================[ ESLint Comments ]=======================

  '@eslint-community/eslint-comments/require-description': ['error'],
  '@eslint-community/eslint-comments/no-unused-disable': 'error',
  '@eslint-community/eslint-comments/no-unused-enable': 'error',
  '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
  '@eslint-community/eslint-comments/disable-enable-pair': 'error',
  '@eslint-community/eslint-comments/no-duplicate-disable': 'error',

  // =======================[ Prettier ]=======================

  'prettier/prettier': [
    'error',
    {
      printWidth: 110,
      tabWidth: 2,
      semi: false,
      singleQuote: true,
      trailingComma: 'none',
      endOfLine: 'auto'
    }
  ]

  // =======================[ Overrides ]=======================
  // In case I need it.. :)
}
