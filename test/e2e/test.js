const { Builder } = require('selenium-webdriver');
const config = require('./config');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;

const capabilities = { browserName: config.browserName }

let driver;

if (config.gridEnabled) {
    let gridUrl = "http://selenium-hub:4444/wd/hub";
    config.baseUrl = "http://tests:8080/demo/vl-button.html";
    driver = new Builder().usingServer(gridUrl).withCapabilities(capabilities).build();
} else {
    config.baseUrl = "http://localhost:8080/demo/vl-button.html";
    driver = new Builder().withCapabilities(capabilities).build(); 
}

module.exports = { assert, driver };
