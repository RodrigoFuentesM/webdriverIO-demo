const DynamicControls = require('../pageobjects/dynamic-controls.page')

describe('Dynamics Controls', () => {

  it('should wait for the input field to be enabled', async() => {
    await DynamicControls.open();  
    
    await DynamicControls.clickEnableButton();
    await DynamicControls.inputEnabledFiled.waitForEnabled({timeout: 4000});

    await expect(DynamicControls.inputEnabledFiled).toBeEnabled();
    await expect(DynamicControls.enableButton).toHaveAttrContaining('autocomplete', 'off');
    await expect(DynamicControls.pageFooter).toHaveHrefContaining('elemental');
  });

  it('should wait for the input field to be disabled', async() => {
    await DynamicControls.clickEnableButton();
    await DynamicControls.inputEnabledFiled.waitForEnabled({timeout: 4000, reverse: true});

    expect(DynamicControls.inputEnabledFiled).not.toBeEnabled();
    
  }); 
});