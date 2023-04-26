module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json'
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'linebreak-style': ['error', 'windows'],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': 'off'
    }
}
