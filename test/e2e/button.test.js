
const ButtonPage = require('../e2e/pages/button.page')
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;

describe('Button', function () {
    const driver = new Builder().forBrowser('chrome').build();

    it('Als ik op de knop klik, word mijn actie geregistreerd.', async () => {
        await driver.get('http://localhost:8080/demo/vl-button.html');

        let buttonPage = new ButtonPage(driver);
        const primaryButton = await buttonPage.primaryButton();
        let text = await primaryButton.getText();
        expect(text).to.equal('Gegevens opslaan');
        await primaryButton.click();
        text = await primaryButton.getText();
        expect(text).to.equal('Klik geregistreerd');
        return Promise.resolve();
    });

    after(() => driver && driver.quit());
})
