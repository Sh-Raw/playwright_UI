import { Page, Locator } from '@playwright/test';

export class HerokuAppPage {
  readonly page: Page;
  readonly baseUrl = 'https://the-internet.herokuapp.com/';
  readonly abTestUrl = `${this.baseUrl}abtest`;
  readonly abTestLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.abTestLink = page.locator('a[href="/abtest"]');
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }
}


