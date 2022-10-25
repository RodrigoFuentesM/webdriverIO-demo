const framePage = require('../pageobjects/frames.page');

describe('Frame Page test suite', () => {

  beforeEach(async() => {
    framePage.open();
  });



  it('should write on iframe', async() => {
    const text = 'This is the text';
    await framePage.clickIFrameLink();

    await framePage.sendKeysToIFrameBody(text, true);

    expect(await framePage.iFrameText).toHaveText(text);
    await browser.switchToParentFrame();
    expect(await framePage.pageTitle).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
  });
});