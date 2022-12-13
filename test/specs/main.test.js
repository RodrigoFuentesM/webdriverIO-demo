const mainPage = require('../pageobjects/main.page')

describe('Interacting with elements', () => {
  it('get text for element', async() => {
    await mainPage.open();

    await expect(mainPage.subTitle).toHaveText('Available Examples');
    await expect(await mainPage.listExamples[0]).toHaveText('A/B Testing');
    await expect(mainPage.getExample(6)).toHaveText('Checkboxes');
  });

  
});

describe('Test element actions', () => {

  beforeEach(async() => {
    await mainPage.open();
  });

  it('should go to the first link', async () => {
    await mainPage.clickExample(1);

    await expect(await (browser.getUrl())).toEqual('https://the-internet.herokuapp.com/abtest');
  });

  it('should show first text', async () => {
    await expect(await mainPage.getExampleText(1)).toEqual('A/B Testing');
  });

  it('should scroll to the footer', async() => {
    await mainPage.open();
    await mainPage.scrollToPageFooter();

    expect(await mainPage.isPageFooterInViewPort()).toEqual(true);
  })
});
