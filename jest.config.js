module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/amplify/backend/function'
  ],
  transform: {

    '.+\\.(css|sass|scss)$': 'jest-transform-css',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }
  },
  testRegex: '((\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!/node_modules/',
    '!src/aws-exports.js',
    '!src/serviceWorker.ts',
    '!src/index.tsx'
  ],
  coverageThreshold: {
    'global': {
      'branches': 80,
      'functions': 80,
      'lines': 80,
      'statements': -10
    }
  }
}
