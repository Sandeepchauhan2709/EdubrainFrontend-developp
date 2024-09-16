module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'space-before-function-paren': 'off',
    'react/react-in-jsx-scope': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    ' @typescript-eslint/no-unsafe-argument': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
