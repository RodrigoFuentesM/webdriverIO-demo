const Page = require('./page');

class MultipleWindowsPage extends Page {

  get newWindowLink() { return $('div.example a') };
  get h3Header() { return $('div.example h3') };

  /**
  * Click the 'Click here' link 
  */
  async clickNewWindow() {
    //await (await this.newWindowLink).waitForDisplayed();
    //await (await this.newWindowLink).click();
    await this.waitAndClick(this.newWindowLink);
  };

  /**
   * Give information if the title is displayed or not
   * @returns true if the title 'New Window' is displayed, false otherwise
   */
  async isTitleDisplayed() {
    return (await this.h3Header).isDisplayed();
  };

  /**
   * Gets the value with the title text
   * @returns a string with the text value of the title
   */
  async getTitleText() {
    await (await this.h3Header).waitForDisplayed();
    return (await this.h3Header).getText();
  }

  open() {
    return super.open('/windows');
  }
};

module.exports = new MultipleWindowsPage();