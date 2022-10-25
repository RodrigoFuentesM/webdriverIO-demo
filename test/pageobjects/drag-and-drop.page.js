const Page = require('./page');

class DragAndDropPage extends Page {

  get columnA() { return $('#column-a') };
  get columnB() { return $('#column-b') };
  get firstHeader() { return $('#column-a header') };
  get secondHeader() { return $('#column-b header') };

  open() {
    return super.open('/drag_and_drop');
  };

  /**
   * Drag box A to box B
   */
  async dragColumnAToColumnB() {
    /* await (await this.columnA).waitForDisplayed();
    await (await this.columnA).dragAndDrop(await this.columnB); */
    
    await browser.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'mouse' },
      actions: [
        { type: 'pointerMove', duration: 0, origin: (await this.columnA), x: 0, y: 0 },
        { type: 'pointerDown', button: 0 },
        //{ type: 'pause', duration: 10 }, // emulate human pause
        { type: 'pointerMove', duration: 10, origin: (await this.columnB), x: 0, y: 0 }
        //{ type: 'pointerMove', duration: 10, origin: (await this.columnB), x: 0, y: 0 },
        //{ type: 'pause', duration: 10 }, // emulate human pause
        //{ type: 'pointerUp', button: 0 }
      ]
    }]).then(async() => (await this.columnB).click());
  }; 
};

module.exports = new DragAndDropPage();