const { By } = require('selenium-webdriver');
const { WebElement } = require('selenium-webdriver');

class Button extends WebElement{

    constructor(driver, selector) {
        super(driver, selector);
    }
}

module.exports = Button;
