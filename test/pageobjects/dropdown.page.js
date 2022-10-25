const Page = require("./page");

class DropDownPage extends Page {

  get dropDown() { return $('#dropdown') };
  
  /**
   * Gets the numbered option of the dropdown
   * @param {number} index Index of the option, starting from 1
   * @returns {WebdriverIO.Element} 
   */
  async getOption(index) {
    return $(`#dropdown option:nth-child(${index +1})`);
  }
  
  /**
   * Waits for the dropdown to be displayed and then clicks it
   */
  async clickDropDownMenu() {
    await super.waitAndClick(await this.dropDown);
  };

  /**
   * Clicks on the option indicated by the index
   * @param {number} index Index of the option starting from 1
   */
  async clickOption(index) {
    await super.waitAndClick(await this.getOption(index));
  };

  /**
   * Opens dropdown page on broswer
   * @returns {Promise<string>}
   */
  open() {
    return super.open('/dropdown');
  };
};

module.exports = new DropDownPage();