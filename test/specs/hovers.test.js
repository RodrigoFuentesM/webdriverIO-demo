const hoversPage = require('../pageobjects/hovers.page')

describe('Hovers page test', () => {

  [0, 1, 2].forEach((userNumber) => {
    it(`should not displayed user #${userNumber +1} by default`, async() => {
      if(userNumber == 0) await hoversPage.open();

      expect(await hoversPage.isUserProfileVisible(userNumber)).toEqual(false);
    });
  });

  [0, 1, 2].forEach((userNumber) => {
    it(`should show profile of user #${userNumber +1} info while hovering the mouse`, async () => {
      await hoversPage.open();
      await hoversPage.hoverUserImage(userNumber);

      await expect(await hoversPage.isUserProfileVisible(userNumber)).toEqual(true);
      await expect(await hoversPage.userProfileText(userNumber)).toEqual(`name: user${userNumber +1}`);
      [0, 1, 2].forEach(async (i) => {
        if (i != userNumber) expect(await hoversPage.isUserProfileVisible(i)).toEqual(false);
      });
    });
  });
})