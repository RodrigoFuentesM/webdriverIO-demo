const Page = require("./page");

class CheckboxesPage extends Page {

  async open() {
    return super.open("/checkboxes");
  }

  async getCheckbox(index) {
    return $(`#checkboxes input:nth-child(${index})`);
  };

  async clickCheckbox(index) {
    return (await this.getCheckbox(index)).click();
  };

  async isCheckoboxSelected(index) {
    return (await this.getCheckbox(index)).isSelected();
  };
}

module.exports = new CheckboxesPage();