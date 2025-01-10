module.exports = {
  transform: {
    '\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
  },

  testEnvironment: 'jsdom',
};
