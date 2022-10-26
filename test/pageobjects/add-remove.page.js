const Page = require("./page");

class AddRemovePage extends Page {

  get addElementButton() { return $('div.example button:nth-child(1)') }

  get deleteButtons() { return $$('#elements button') }

  open() {
    return super.open('/add_remove_elements/');
  };
  
  /**
   * Clicks tha add element button given times
   * @param {number} times Number of clicks
   */
  async clckAddButtonTimes(times) {
    for(let i = 0; i < times; i++) await super.waitAndClick(this.addElementButton);
  };

  /**
   * Clicks the index delete button
   * @param {number} index Index of the button, starts at 1
   */
  async clickDeleteButton(index) {
    await super.waitAndClick(this.deleteButtons[index]);
  };

};

module.exports= new AddRemovePage();