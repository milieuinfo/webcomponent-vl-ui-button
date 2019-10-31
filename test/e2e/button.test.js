
const ButtonPage = require('../e2e/pages/button.page')
const {Builder, Key, By, until} = require('selenium-webdriver');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

describe('Button', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Als ik op de knop klik, word mijn actie geregistreerd.', async function() {
        await driver.get('https://localhost:8080/demo/vl-button.html');
        let buttonPage = await new ButtonPage(driver);
        let primaryButton = await buttonPage.primaryButton();
        primaryButton.click();

        sleep(10000);
    });

    after(() => driver && driver.quit());
})
