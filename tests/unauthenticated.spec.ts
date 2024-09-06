import { expect, test } from '@playwright/test';

test.use({
	ignoreHTTPSErrors: true
});

test('Basic Unauthenticated Behavior', async ({ page }) => {
	// Go to /
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('minv');

	// Click ul >> text=Videos
	await page.locator('ul >> text=Videos').click();
	await expect(page).toHaveURL('/videos');

	// Click text=Channels
	await page.locator('text=Channels').click();
	await expect(page).toHaveURL('/channels');

	// Click text=Authenticate
	await page.locator('text=Authenticate').click();
	await expect(page).toHaveURL('/auth');

	// Click img[alt="minv"]
	await page.locator('img[alt="minv"]').click();
	await expect(page).toHaveURL('/');

	// Click text=Explore Videos
	await page.locator('text=Explore Videos').click();
	await expect(page).toHaveURL('/videos');

	// Click img[alt="minv"]
	await page.locator('img[alt="minv"]').click();
	await expect(page).toHaveURL('/');

	// Click text=Explore Channels
	await page.locator('text=Explore Channels').click();
	await expect(page).toHaveURL('/channels');

	// Click img[alt="minv"]
	await page.locator('img[alt="minv"]').click();
	await expect(page).toHaveURL('/');

	// Click section >> text=Authenticate
	await page.locator('section >> text=Authenticate').click();
	await expect(page).toHaveURL('/auth');

	// Click img[alt="minv"]
	await page.locator('img[alt="minv"]').click();
	await expect(page).toHaveURL('/');

	// Click [aria-label="Dark mode"]
	await page.locator('[aria-label="Dark mode"]').click();
	const html = page.locator('html');
	expect(html).toHaveClass('dark');

	// Click [aria-label="Dark mode"]
	await page.locator('[aria-label="Dark mode"]').click();
});
