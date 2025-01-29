module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  "rules": {
    "react/prop-types": "off", // Turns off prop-types validation
    "no-unused-vars": "warn", // Changes unused variables from error to warning
    "no-console": "warn", // Allows console logs with a warning
    "react/jsx-props-no-spreading": "off" // Allows JSX prop spreading without warnings
  }
}
