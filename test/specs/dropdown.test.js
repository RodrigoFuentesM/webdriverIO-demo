const dropdownPage = require('../pageobjects/dropdown.page');

describe('Dropdown page test suite', () => {

  beforeEach(async () => {
    dropdownPage.open();
  });

  [1, 2].forEach((number) => {
    it('should select option 1', async () => {
      await dropdownPage.clickDropDownMenu();
      await dropdownPage.clickOption(number);

      expect(await dropdownPage.getOption(number)).toBeSelected();
    });
  });
})