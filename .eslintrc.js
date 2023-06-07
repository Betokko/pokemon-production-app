module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended'
    ],
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off'
        }
    }],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    plugins: [
        'react',
        'i18next',
        'react-hooks'
    ],
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'max-len': ['error', {
            code: 120,
            ignoreComments: true
        }],
        'linebreak-style': ['error', 'windows'],
        'no-unused-vars': 'warn',
        'react/jsx-filename-extension': ['error', {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to', 'fill', 'name', 'size']
        }],
        'react/display-name': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'no-type-imports' }],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-floating-promises': 'off'
    }
}
