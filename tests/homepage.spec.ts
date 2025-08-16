// npm init playwright:latest;

import {test,expect} from '@playwright/test';

test('Validate homepage for elements', async({ page })=>{
    const baseUrl= "https://the-internet.herokuapp.com/";
    const abTestLink =page.locator('a[href="/abtest"]');
    const abTestUrl = `${baseUrl}abtest`;

    await page.goto(baseUrl);
    await expect(page).toHaveTitle("The Internet");
    await expect(page.locator('h1.heading')).toHaveText('Welcome to the-internet');
    await expect(page.locator('h2')).toHaveText('Available Examples');
    await expect(page.locator('a[href="/dropdown"]')).toHaveText('Dropdown')


    await expect(abTestLink).toHaveText('A/B Testing');
    await abTestLink.click();
    await page.waitForURL(abTestUrl)
    await expect(page).toHaveURL(abTestUrl);




    const count= await page.locator('a').count()
    console.log('Total number of links on the page ',count)


   
});


