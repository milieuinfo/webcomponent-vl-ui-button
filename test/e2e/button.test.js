
const ButtonPage = require('../e2e/pages/button.page')
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;

describe('Button', function () {
    const driver = new Builder().forBrowser('chrome').build();

    it('Als ik op de knop klik, word mijn actie geregistreerd.', async () => {
        await driver.get('http://localhost:8080/demo/vl-button.html');
        let buttonPage = new ButtonPage(driver);
        const primaryButton = await buttonPage.primaryButton();
        assert.eventually.equal(primaryButton.getText(), 'Gegevens opslaan');
        await primaryButton.click();
        assert.eventually.equal(primaryButton.getText(), 'Klik geregistreerd');
    });

    after(() => driver && driver.quit());
})
