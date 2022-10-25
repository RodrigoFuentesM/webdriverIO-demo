const Page = require('./page');

class HoversPage extends Page {

  get userSections() { return $$('div.figure')}

  /**
   * move the mouse to a user image 
   * @param {Number} index index of the user starts on 0
   */
  async hoverUserImage(index) {
    const userImage = await this.userSections[index].$('img');
    await userImage.waitForDisplayed();
    await userImage.moveTo();
  };

  /**
   * returns true if the user profile text is showing or false if not
   * @param {Number} index index of the user starts on 0
   */
  async isUserProfileVisible(index) {
    const userProfile = await this.userSections[index].$('h5');
    return userProfile.isDisplayed();
  }

  async userProfileText(index) {
    const userProfile = await this.userSections[index].$('h5');
    await userProfile.waitForDisplayed();
    return userProfile.getText();
  }

  open() {
    return super.open('/hovers');
  }
};

module.exports = new HoversPage();

