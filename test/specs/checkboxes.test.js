const checkboxesPage = require('../pageobjects/checkboxes.page');

describe('Checkboxes page - Element Actions', () => {
  
  /* beforeEach('Opening the page', async () => {
    await checkboxesPage.open();
  }); */

  /* afterEach(async() => {
    await browser.reloadSession();
  }); */

  it('should click checkbox', async() => {
    await checkboxesPage.clickCheckbox(1);

    expect(await checkboxesPage.isCheckoboxSelected(1)).toEqual(true);
  });

  it('should uncheck checkbox', async () => {
    //await checkboxesPage.clickCheckbox(1);
    
    await checkboxesPage.clickCheckbox(1);

    await expect(await checkboxesPage.isCheckoboxSelected(1)).toEqual(false);
  })
});