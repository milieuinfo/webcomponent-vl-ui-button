const { Builder } = require('selenium-webdriver');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;
const chromeDriver = new Builder().forBrowser('chrome').build();

module.exports = { assert, chromeDriver };
