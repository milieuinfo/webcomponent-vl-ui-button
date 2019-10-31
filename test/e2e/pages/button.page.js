const Button = require('../components/button');
const { By } = require('selenium-webdriver');

class ButtonPage {
    constructor(driver) {
        this.driver = driver;
    }

    async primaryButton() {
        return this.driver.findElement(By.id('button-primary'));
        // return new Button(this.driver, '#button-primary');
    }
}

module.exports = ButtonPage;
