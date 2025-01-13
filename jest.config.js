module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/services'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
