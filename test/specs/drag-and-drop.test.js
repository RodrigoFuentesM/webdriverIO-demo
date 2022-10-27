const dragAndDrop = require('../pageobjects/drag-and-drop.page');

xdescribe('Drag and Drop page test suite', () => {

  beforeEach(async() => {
    await dragAndDrop.open();
  });

  xit('should drag column A to column B', async() => {
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
      const elem = await $('#draggable')
      const target = await $('#droppable')
      //await  browser.pause(5000)
      // drag and drop to other element
      await elem.dragAndDrop(target);
      await expect(target).toHaveText('Dropped!');

  })
});