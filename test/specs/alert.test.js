const alertPage = require('../pageobjects/alerts.page');

describe('Javascript Alerts page test suite', () => {

  const alertText = 'I am a JS Alert';
  const alertResult = 'You successfully clicked an alert';
  beforeEach(async() => {
    await alertPage.open();
  });

  const showTextCases = [
    {type: 'alert', index: 1, expectedText: 'I am a JS Alert'},
    {type: 'confirm', index: 2, expectedText: 'I am a JS Confirm'},
    {type: 'prompt', index: 3, expectedText: 'I am a JS prompt'}
  ].forEach(({type, index, expectedText}) => {
    it(`should get text on ${type}`, async() => {
      await alertPage.clickButton(index);
  
      await expect(await browser.getAlertText()).toEqual(expectedText);
    });
  })
  

  it('should show text that alert is accepted', async() => {
    await alertPage.clickAlertButton();
    await browser.acceptAlert();

    await expect(await alertPage.result).toHaveText(alertResult);
  });

  it('should show text when alert is canceled', async() => {
    await alertPage.clickButton(2);
    await browser.dismissAlert();

    await expect(await alertPage.result).toHaveText('You clicked: Cancel');
  });

  it('should show the text inserted', async() => {
    const message = 'Some message';
    await alertPage.clickButton(3);
    await browser.sendAlertText(message);
    await browser.acceptAlert();

    expect(await alertPage.result).toHaveText(message);
  });
});