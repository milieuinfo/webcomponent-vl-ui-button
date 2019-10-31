
const ButtonPage = require('../e2e/pages/button.page')
const {Builder} = require('selenium-webdriver');

describe('Button', function () {
    const driver = new Builder().forBrowser('chrome').build();

    it('Als ik op de knop klik, word mijn actie geregistreerd.', async () => {
        await driver.get('http://localhost:8080/demo/vl-button.html');
        let buttonPage = new ButtonPage(driver);
        let primaryButton = await buttonPage.primaryButton();
        primaryButton.click();
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    });

    after(() => driver && driver.quit());
})
