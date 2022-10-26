const Page = require("./page");

class AlertsPage extends Page {

  get alertButton() { return $("button[onclick='jsAlert()']") };
  get confirmButton() { return $("button[onclick='jsConfirm()']") };
  get promptButton() { return $("button[onclick='jsPromt()']") };
  get result() { return $('#result') };

  open() {
    return super.open('/javascript_alerts');
  };

  async getButton(index) {
    return $(`div.example li:nth-child(${index}) button`)
  };

  /**
   * Waits until the index button is displayed and clicks it
   * @param {number} index Index of the button on the page, starts on 1
   */
  async clickButton(index) {
    await super.waitAndClick(await this.getButton(index));
  }

  /**
   * Clicks Alert button
   */
  async clickAlertButton() {
    await super.waitAndClick(this.alertButton);
  };

  /**
   * Clicks Confirm button
   */
  async clickConfirmButton() {
    await super.waitAndClick(this.alertButton);
  };

  /**
   * Clicks Prompt button
   */
  async clickPromptButton() {
    await super.waitAndClick(this.promptButton);
  };
};

module.exports = new AlertsPage();