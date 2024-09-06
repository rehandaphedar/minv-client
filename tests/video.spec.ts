import { expect, test } from '@playwright/test';

test.use({
	ignoreHTTPSErrors: true
});

test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }) => {
	await page.goto('/auth');
	await page.locator('[placeholder="channelname"]').fill('playwright-user-3');
	await page.locator('[placeholder="password"]').fill('playwright-secret-3');

	await page.locator('button:has-text("Authenticate")').click();
	await page.waitForURL('/');
});

test('Create a video', async ({ page }) => {
	// Click text=Upload a Video
	await page.locator('text=Upload a Video').click();
	await expect(page).toHaveURL('/videos/upload');

	// Click [placeholder="Title"]
	await page.locator('[placeholder="Title"]').click();

	// Fill [placeholder="Title"]
	await page.locator('[placeholder="Title"]').fill('playwright-title-1');

	// Press Tab
	await page.locator('[placeholder="Title"]').press('Tab');

	// Fill textarea
	await page.locator('textarea').fill('playwright-description-1');

	// Click input[type="file"]
	await page.locator('input[type="file"]').click();

	// Upload tests/crazy_math.mp4
	await page.locator('input[type="file"]').setInputFiles('tests/crazy_math.mp4');

	// Click button:has-text("Upload")
	await page.locator('button:has-text("Upload")').click();
	await expect(page).toHaveURL('/video/playwright-title-1');
});

test('Edit a video', async ({ page }) => {
	// Goto /video/playwright-title-1
	await page.locator('ul >> text=Videos').click();
	await page.waitForURL('/videos');
	await page.locator('text=playwright-title-1').click();

	// Click text=Edit Video
	await page.locator('text=Edit Video').click();
	await expect(page).toHaveURL('/video/playwright-title-1/edit');

	// Click [placeholder="Title"]
	await page.locator('[placeholder="Title"]').click();

	// Fill [placeholder="Title"]
	await page.locator('[placeholder="Title"]').fill('playwright-title-1-edited');

	// Click button:has-text("Edit")
	await page.locator('button:has-text("Edit")').click();
	await expect(page).toHaveURL('/video/playwright-title-1');

	expect((await page.textContent('h1'))?.startsWith('playwright-title-1-edited')).toBeTruthy();
});

test('Delete a video', async ({ page }) => {
	// Goto /video/playwright-title-1
	await page.locator('ul >> text=Videos').click();
	await page.waitForURL('/videos');
	await page.locator('text=playwright-title-1').click();

	// Click text=Delete Video
	await page.locator('text=Delete Video').click();
	await expect(page).toHaveURL('/video/playwright-title-1/delete');

	// Click text=Yes
	await page.locator('text=Yes').click();
	await expect(page).toHaveURL('/videos');
});
