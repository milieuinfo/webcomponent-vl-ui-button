const { Builder } = require('selenium-webdriver');
const { browser } = require('./config.json');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;

const capabilities = { browserName: browser }

const gridUrl = 'http://selenium-hub:4444/wd/hub';

const driver = new Builder().usingServer(gridUrl).withCapabilities(capabilities).build();

module.exports = { assert, driver };
