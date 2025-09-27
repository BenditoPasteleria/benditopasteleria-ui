import { defineConfig, devices } from '@playwright/test';
import './envConfig.ts';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const isCI = !!process.env.CI;

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: isCI,
	retries: isCI ? 2 : 0,
	workers: isCI ? 1 : undefined,
	reporter: isCI ? 'dot' : 'list',

	use: {
		baseURL,
		trace: 'on-first-retry',
	},

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],

	webServer: {
		command: isCI ? 'npm run start' : 'npm run dev',
		url: baseURL,
		reuseExistingServer: !isCI,
	},
});
