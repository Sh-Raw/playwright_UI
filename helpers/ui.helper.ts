import {Page,Locator,expect} from '@playwright/test'

export class UiHelper{

constructor(private page:Page){};

async goToUrl(url:string):Promise<void>{

    await this.page.goto(url);
}


}
