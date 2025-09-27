import { test, expect } from '@playwright/test';

test('should has title', async ({ page }) => {
	await page.goto('/');
	expect(page).toBeDefined();
});
