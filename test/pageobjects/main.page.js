const Page = require('./page')

class MainPage extends Page {

  get subTitle() { return $('#content > h2') };
  get listExamples () { return $$('ul li')};
  get pageFooter() { return $('#page-footer') }

  open() {
    return super.open('/');
  };

  /**
   * scroll to the page footer
   */
  async scrollToPageFooter() {
    await (await this.pageFooter).waitForDisplayed();
    await (await this.pageFooter).scrollIntoView();
  }

  /**
   * returns true if the page footer is in viewport, otherwise returns false
   */
  async isPageFooterInViewPort() {
    return (await this.pageFooter).isDisplayedInViewport();
  }

  /**
   * get the example web element from the page
   * @param {Number} index the index of the element
   * @returns 
   */
  async getExample(index) {
    return $(`ul li:nth-child(${index})`);
  }

  async getExampleText(index) {
    return (await this.getExample(index)).getText();
  }

  async clickExample(index) {
    await (await this.getExample(index)).waitForDisplayed();
    await (await this.getExample(index)).$('a').click();
  }
};

module.exports = new MainPage();