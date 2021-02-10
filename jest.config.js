module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  automock: false,
  testPathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
