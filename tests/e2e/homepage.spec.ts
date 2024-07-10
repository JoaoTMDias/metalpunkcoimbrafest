import { test, expect } from '@playwright/test';
import { NAV_ITEMS } from '../../src/constants/menu';

test.describe('Homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('has header', async ({ page }) => {
        const ELEMENTS = {
            header: await page.getByTestId('mpx-header')
        };

        await expect(ELEMENTS.header).toBeVisible();

        for (const item of NAV_ITEMS) {
            const ITEM = await ELEMENTS.header.getByText(item.linkText);

            await expect(ITEM).toBeVisible();
        }
    });
});
