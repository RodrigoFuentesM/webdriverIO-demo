const dragAndDrop = require('../pageobjects/drag-and-drop.page');

xdescribe('Drag and Drop page test suite', () => {

  beforeEach(async() => {
    await dragAndDrop.open();
  });

  it('should drag column A to column B', async() => {
    await dragAndDrop.dragColumnAToColumnB();

    await expect(await dragAndDrop.firstHeader).toHaveText('B');
    await expect(await dragAndDrop.secondHeader).toHaveText('A');
  });


});

describe('Multiple Windows test suite', () => {
  before(async() => {
    await  browser.url("https://jqueryui.com/resources/demos/droppable/default.html")
  });
  it('should switch to the next window', async() => {
      const elem = await $('#column-a')
      const target = await $('#column-b')
      //await  browser.pause(5000)
      // drag and drop to other element
      await elem.dragAndDrop(target);
      await expect(target).toHaveText('Dropped!');

  })
});