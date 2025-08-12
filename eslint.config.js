const { defineConfig } = require('eslint/config')

const react = require('eslint-plugin-react')
const prettier = require('eslint-plugin-prettier')
const js = require('@eslint/js')

const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

module.exports = defineConfig([
  {
    extends: compat.extends(
      'next/core-web-vitals',
      'plugin:@next/next/recommended',
      'plugin:react/recommended',
      'prettier'
    ),

    plugins: {
      react,
      prettier,
    },

    rules: {
      'prettier/prettier': 'error',

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx'],
        },
      ],

      'arrow-body-style': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      'react/state-in-constructor': 'off',

      camelcase: [
        'warn',
        {
          ignoreImports: true,
        },
      ],

      'react/function-component-definition': 'off',

      'id-match': [
        'error',
        '^[a-zA-Z0-9_$]*$',
        {
          properties: true,
          onlyDeclarations: false,
        },
      ],
    },
  },
])
