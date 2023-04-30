import path from 'path'

export default {
    testEnvironment: 'jsdom',
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],
    moduleDirectories: [
        'node_modules'
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    rootDir: '../../',
    modulePaths: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'JestEmptyComponent.tsx')
    }
}
