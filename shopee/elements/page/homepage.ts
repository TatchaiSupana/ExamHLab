import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class HomePage extends BasePage{
    readonly englishButtonLocator: Locator = this.page.getByRole('button', { name: 'English' });
    readonly searchButtonLocator: Locator = this.page.locator('.shopee-searchbar__search-button');
    readonly inputSearchLocator: Locator = this.page.getByLabel('ลูกค้าใหม่ รับเลย โค้ดส่วนลด หรือโค้ดส่งฟรี*');
    readonly searchResultLocator: Locator = this.page.locator('.shopee-search-result-header__text-highlight')

    constructor(page: Page) {
        super(page);
      }


    async selectEnglish(){
        await this.englishButtonLocator.click();
    }

    async searchProduct(keyword:string){
        await this.inputSearchLocator.fill(keyword)
        await this.searchButtonLocator.click()
    }
}