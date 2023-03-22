module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1'
  },
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
};
