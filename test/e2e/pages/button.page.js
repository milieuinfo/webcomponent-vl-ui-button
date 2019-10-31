const Button = require('../components/button');

class ButtonPage {
    constructor(driver) {
        this.driver = driver;
    }

    async primaryButton() {
        return new Button(this.driver, '#button-primary');
    }
}

module.exports = ButtonPage;
