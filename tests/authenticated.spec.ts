import { expect, test } from '@playwright/test';

test.use({
	ignoreHTTPSErrors: true
});

test.beforeEach(async ({ page }) => {
	await page.goto('/auth');
	await page.locator('[placeholder="channelname"]').fill('playwright-user-1');
	await page.locator('[placeholder="password"]').fill('playwright-secret-1');

	await page.locator('button:has-text("Authenticate")').click();
	await page.waitForURL('/');
});

test('Basic Authenticated Behavior', async ({ page }) => {
	// Click ul >> text=Videos
	await page.locator('ul >> text=Videos').click();

	// Click ul >> text=Channels
	await page.locator('ul >> text=Channels').click();
	await expect(page).toHaveURL('/channels');

	// Click ul >> text=Logout
	await page.locator('ul >> text=Logout').click();
	await expect(page).toHaveURL('/');

	// Click img[alt="minv"]
	await page.locator('img[alt="minv"]').click();
	await expect(page).toHaveURL('/');

	// Click ul >> text=Authenticate
	await page.locator('ul >> text=Authenticate').click();
	await expect(page).toHaveURL('/auth');

	// Click [placeholder="channelname"]
	await page.locator('[placeholder="channelname"]').click();

	// Fill [placeholder="channelname"]
	await page.locator('[placeholder="channelname"]').fill('playwright-user-1');

	// Press Tab
	await page.locator('[placeholder="channelname"]').press('Tab');

	// Fill [placeholder="password"]
	await page.locator('[placeholder="password"]').fill('playwright-secret-1');

	// Press Tab
	await page.locator('[placeholder="password"]').press('Tab');

	// Press Enter
	await page.locator('button:has-text("Authenticate")').press('Enter');
	await expect(page).toHaveURL('/');

	// Click text=Upload a Video
	await page.locator('text=Upload a Video').click();
	await expect(page).toHaveURL('/videos/upload');

	// Click img[alt="minv"]
	await page.locator('img[alt="minv"]').click();
	await expect(page).toHaveURL('/');

	// Click text=Delete your channel
	await page.locator('text=Delete your channel').click();
	await expect(page).toHaveURL('/deleteChannel');

	// Click img[alt="minv"]
	await page.locator('img[alt="minv"]').click();
	await expect(page).toHaveURL('/');

	// Click section >> text=Logout
	await page.locator('section >> text=Logout').click();
	await expect(page).toHaveURL('/');
});
