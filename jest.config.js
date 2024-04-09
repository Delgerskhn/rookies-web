/** @type {import('jest').Config} */
const config = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

module.exports = config;
