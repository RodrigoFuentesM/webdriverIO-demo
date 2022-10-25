const dragAndDrop = require('../pageobjects/drag-and-drop.page');

describe('Drag and Drop page test suite', () => {

  beforeEach(async() => {
    await dragAndDrop.open();
  });

  it('should drag column A to column B', async() => {
    await dragAndDrop.dragColumnAToColumnB();

    await expect(await dragAndDrop.firstHeader).toHaveText('B');
    await expect(await dragAndDrop.secondHeader).toHaveText('A');
  });


});