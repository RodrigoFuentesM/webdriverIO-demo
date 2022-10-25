const Page = require("./page");

class DynamicControls extends Page {

  get enableButton () {
    return $("#input-example > button");
  }

  get inputEnabledFiled () {
    return $("#input-example > input")
  }

  get pageFooter () { return $('#page-footer a') }

  open() {
    return super.open('/dynamic_controls')
  }

  async clickEnableButton() {
    await this.enableButton.waitForDisplayed();
    await this.enableButton.click();
  }
}

module.exports = new DynamicControls();