const addRemovePage = require('../pageobjects/add-remove.page');

describe('Add and Remove elements page test suite', () => {

  beforeEach(() => {
    addRemovePage.open();
  });

  [0, 1, 4, 10].forEach((times) => {
    it(`should create ${times} delete buttons`, async() => {
      await addRemovePage.clckAddButtonTimes(times);

      await expect(await addRemovePage.deleteButtons).toHaveLength(times);
    });
  });

  //this test faile due to webdriverIO bug
  xit('should delete the delete button', async() => {
    await addRemovePage.clickAddButton();
    await addRemovePage.clickDeleteButton(1);

    await expect(await addRemovePage.deleteButtons[0].isExisting()).toEqual(false);
  });

  it('it should be fewer delete buttons', async() => {
    await addRemovePage.clckAddButtonTimes(2);
    await addRemovePage.clickDeleteButton(1);

    await expect(await addRemovePage.deleteButtons).toHaveLength(1);
  });
  
});