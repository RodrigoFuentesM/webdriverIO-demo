const Page = require('./page');

class FramePage extends Page {

  get iFrameLink() { return $('div.example li:nth-child(2) a') };
  get iFrameText() { return $('#tinymce') };
  get iFrame() { return $('#mce_0_ifr') };
  get pageTitle() { return $('div.example h3') }

  open() {
    return super.open('/frames');
  }

  /**
   * Clicks the IFrame link and switch to IFrame
   */
  async clickIFrameLink() {
    await super.waitAndClick(await this.iFrameLink);
    await browser.switchToFrame(await this.iFrame);
  };

  /**
   * Sends a text to be written on IFrame boddy
   * @param {string} text text to send
   * @param {boolean} clearFirst If true will clear the value of the element, false as default 
   */
  async sendKeysToIFrameBody(keys, clearFirst = false) {
    await super.waitAndSendKeys(await this.iFrameText, keys, clearFirst);
  };
};

module.exports = new FramePage();