const Page = require('./page');

class KeyPresses extends Page {

  get target() { return $('#target') };
  get result() { return $('#result') };

  async sendKeysToTarget(key) {
    await this.target.waitForDisplayed();
    await this.target.click();
    await this.target.keys(key);
  }

  /**
   * get the text of the result web element
   * @returns a string text
   */
  async getResultText() {
    await this.result.waitForDisplayed();
    return this.result.getText();
  }

  open() {
    return super.open('key_presses');
  }
};

module.exports = new KeyPresses();