module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['whatwg-fetch'],
  setupFilesAfterEnv: ['<rootDir>/src/utils/test/setupTests.ts'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
}
