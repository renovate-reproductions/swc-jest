import fs from 'fs';
import JSON5 from 'json5';

const swcrc = JSON5.parse(fs.readFileSync(`./.swcrc`, 'utf-8'));

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  cacheDirectory: '.cache/jest',
  modulePathIgnorePatterns: ['<rootDir>/dist/', '/__fixtures__/'],
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  watchPathIgnorePatterns: ['<rootDir>/.cache/', '<rootDir>/coverage/'],

  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        ...swcrc,
      },
    ],
  },
};

export default config;
