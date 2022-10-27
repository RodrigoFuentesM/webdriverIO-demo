const dynamicControlsPage = require('../pageobjects/dynamic-controls.page')

describe('Dynamics Controls', () => {

  it('should wait for the input field to be enabled', async() => {
    await dynamicControlsPage.open();  
    
    await dynamicControlsPage.clickEnableButton();
    await dynamicControlsPage.inputEnabledFiled.waitForEnabled({timeout: 4000});

    await expect(dynamicControlsPage.inputEnabledFiled).toBeEnabled();
    await expect(dynamicControlsPage.enableButton).toHaveAttrContaining('autocomplete', 'off');
    await expect(dynamicControlsPage.pageFooter).toHaveHrefContaining('elemental');
  });

  it('should wait for the input field to be disabled', async() => {
    await dynamicControlsPage.clickEnableButton();
    await dynamicControlsPage.inputEnabledFiled.waitForEnabled({timeout: 6000, reverse: true});

    expect(dynamicControlsPage.inputEnabledFiled).not.toBeEnabled();
    
  }); 

  it('should wait until the button text changes' , async() => {
    await dynamicControlsPage.open();
    await dynamicControlsPage.clickCheckboxButton();
    await browser.waitUntil(
      async() => await (await dynamicControlsPage.checkBoxButton).getText() === 'Add',
      6000, 'Expect button to change'
    );
    await expect(await dynamicControlsPage.checkBoxButton)
  });
});