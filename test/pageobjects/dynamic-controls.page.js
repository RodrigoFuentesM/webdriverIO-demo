const Page = require("./page");

class DynamicControls extends Page {

  get enableButton () { return $("#input-example > button"); };
  get inputEnabledFiled () { return $("#input-example > input"); }
  get pageFooter () { return $('#page-footer a') };
  get checkBoxButton() { return $('#checkbox-example button'); };
  get checkBoxMessage() { return$('#message'); };
  get checkbox() { $('#checkbox'); };

  open() {
    return super.open('/dynamic_controls')
  }

  async clickEnableButton() {
    await this.enableButton.waitForDisplayed();
    await this.enableButton.click();
  };

  /**
   * Clicks the checkbox button. This does not differenciate add it or remove it
   */
  async clickCheckboxButton() {
    await super.waitAndClick(this.checkBoxButton);
  };
}

module.exports = new DynamicControls();