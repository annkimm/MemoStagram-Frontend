module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb/hooks', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': 0,
    // 'React' was used before it was defined error를 막기 위해서
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // interface or type 에서 no-unused-vars,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
