const Button = require('../components/button');

class ButtonPage {

    constructor(driver) {
        this.driver = driver;
    }

    async primaryButton(driver) {
        return new Button(driver, '#button-primary');
    }
}

module.exports = ButtonPage;
