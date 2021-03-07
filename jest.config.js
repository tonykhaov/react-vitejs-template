module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/utils/test/setupTests.ts'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
}
