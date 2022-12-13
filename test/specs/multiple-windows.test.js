const multipleWindowsPage = require('../pageobjects/multiple-windows.page');

describe('Multiple Windows test suite', () => {

  before(async() => {
    multipleWindowsPage.open();
  });

  it('should switch to the next window', async() => {
    await multipleWindowsPage.clickNewWindow();
    await browser.switchWindow('/windows/new');
    const title = await multipleWindowsPage.h3Header;

    expect(title).toBeDisplayed();
    expect(title).toHaveText();
  })

});