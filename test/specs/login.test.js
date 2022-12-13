const loginPage = require('../pageobjects/login.page');
const securePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginPage.open();

        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        await expect(securePage.flashAlert).toHaveTextContaining(
            'SECURE', {ignoreCase: true});
        await expect(browser).toHaveUrl(`${browser.options.baseUrl}/secure`);
        await expect(browser).toHaveTitle('The Internet');
    });

    it('should clear value of username', async() => {
        await loginPage.open();
        
        await loginPage.clearUsername();

        await expect(await(loginPage.inputUsername.getValue())).toEqual('');
    });
});


