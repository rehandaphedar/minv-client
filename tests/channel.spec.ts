import { expect, test } from '@playwright/test';

test.use({
	ignoreHTTPSErrors: true
});

test('Creating a channel', async ({ page }) => {
	// Go to /
	await page.goto('/');

	// Click ul >> text=Authenticate
	await page.locator('ul >> text=Authenticate').click();
	await expect(page).toHaveURL('/auth');

	// Click [placeholder="channelname"]
	await page.locator('[placeholder="channelname"]').click();

	// Fill [placeholder="channelname"]
	await page.locator('[placeholder="channelname"]').fill('playwright-user-2');

	// Press Tab
	await page.locator('[placeholder="channelname"]').press('Tab');

	// Fill [placeholder="password"]
	await page.locator('[placeholder="password"]').fill('playwright-secret-2');

	// Press Tab
	await page.locator('[placeholder="password"]').press('Tab');

	// Press Enter
	await page.locator('button:has-text("Authenticate")').press('Enter');
	await expect(page).toHaveURL('/');
});

test('Deleting a channel', async ({ page }) => {
	await page.goto('/auth');
	await page.locator('[placeholder="channelname"]').fill('playwright-user-2');
	await page.locator('[placeholder="password"]').fill('playwright-secret-2');
	await page.locator('button:has-text("Authenticate")').click();

	// Click text=Delete your channel
	await page.locator('text=Delete your channel').click();
	await expect(page).toHaveURL('/deleteChannel');

	// Click text=Yes
	await page.locator('text=Yes').click();
	await expect(page).toHaveURL('/');
});
