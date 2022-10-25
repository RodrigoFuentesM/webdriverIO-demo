/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(path)
    }

    /**
     * Waits until the element is displayed and then clicks it
     * @param {WebdriverIO.Element} element the element to be click
     */
    async waitAndClick(element) {
        await element.waitForDisplayed();
        await element.click();
    }

    /**
     * Waits until the element is displayed and then sends a text to it
     * @param {WebdriverIO.Element} element the element to send text
     * @param {string} text The text that will be send
     * @param {boolean} [clearFirst=false] if true will clear the element value beforehand, false as default
     */
    async waitAndSendText(element, text, clearFirst = false) {
        await element.waitForDisplayed();
        if (clearFirst) await element.clearValue();
        await element.setValue(text);
    };

    /**
     * Waits until the element is displayed and then sends keys to it
     * @param {WebDriverIO.Element} element Element to send keys
     * @param {string} keys Keys to be sent
     * @param {boolean} [clearFirst=false] If true will clear the element value beforehand, false as default
     */
    async waitAndSendKeys(element, keys, clearFirst = false) {
        await element.waitForDisplayed();
        if (clearFirst) await element.clearValue();
        await element.keys(keys);
    }
}
