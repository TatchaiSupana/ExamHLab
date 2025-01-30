import { expect, Page } from '@playwright/test';
import { test } from '../fixtures/default-fixture';

test.describe('Unable landing to homepage because trafic verify is block', () => {
  test('Display Shopee Login page is correctly with english language', async ({ page, homePage }) => {
    await homePage.selectEnglish();
    await expect(page).toHaveTitle(/Login/);
  });

  test('Display search result is corrcetly',async({page,homePage})=>{
    const keyword = 'baby toys'
    await homePage.selectEnglish();
    await homePage.searchProduct(keyword);
    await expect(page).toHaveTitle(/shops related to "baby toys"/);
    await expect(homePage.searchResultLocator).toContainText(`Search result for '${keyword}'`)
  })
});
