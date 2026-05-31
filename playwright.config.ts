import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm start',
    url: 'http://localhost:5000/',
    reuseExistingServer: true
  },
  use: {
    baseURL: 'http://localhost:5000/',
    headless: false
  }

});
