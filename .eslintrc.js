const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [0],
    'react/jsx-filename-extension': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-console': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/typedef': [
      'error',
      {
        propertyDeclaration: true,
        parameter: true,
        arrowParameter: false,
        variableDeclaration: false,
      },
    ],
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/no-unescaped-entities': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/ban-types': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': 0,
    'no-empty-pattern': 0,
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/ban-ts-comment': 0,
    'react/prop-types': 0,
    'react/jsx-curly-brace-presence': 0,
    'arrow-body-style': 0,
    'no-else-return': 0,
    'react/react-in-jsx-scope': 0,
    'arrow-body-style': 0,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};
