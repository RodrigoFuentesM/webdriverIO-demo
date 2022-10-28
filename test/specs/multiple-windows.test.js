const multipleWindowsPage = require('../pageobjects/multiple-windows.page');

describe('Multiple Windows test suite', () => {

  before(async() => {
    await multipleWindowsPage.open();
  });

  it('should switch to the next window', async() => {
    //await browser.pause(2000);
    await multipleWindowsPage.clickNewWindow();
    //await browser.pause(2000);
    await browser.waitUntil(
      async() => (await browser.getWindowHandles()).length === 2
    );
    await browser.switchWindow('/windows/new');
    const title = await multipleWindowsPage.h3Header;

    expect(title).toBeDisplayed();
    expect(title).toHaveText('New Window');
  })

});