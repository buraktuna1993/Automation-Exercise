import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    supportFile: 'cypress/support/index.ts',
    video: false,
    downloadsFolder: 'cypress/downloads',
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,

  retries:
  {
    runMode: 2,
    openMode: 2
  }
});
