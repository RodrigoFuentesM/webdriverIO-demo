const keyPressesPage = require('../pageobjects/key-presses.page')

describe('Key presses page test suite', () => {

  before(async () => {
    await keyPressesPage.open();
  });
  
  const keysTestCases = [
    {key: 'Backspace', result: 'BACK_SPACE'},
    {key: 'a', result: 'A'},
    {key: 'Space', result: 'SPACE'},
    {key: 'Shift', result: 'SHIFT'}
  ]

  keysTestCases.forEach(({key, result}) => {
    it(`should display '${key}' key pressed`, async() => {
      await keyPressesPage.sendKeysToTarget(key);
  
      expect(await keyPressesPage.getResultText()).toEqual(`You entered: ${result}`);
    });
  });
});