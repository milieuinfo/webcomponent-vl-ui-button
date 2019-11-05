let argv = require('yargs').argv;

function getBrowserName(argv) {
    if (argv.chrome) {
        return "chrome"
    } else if (argv.firefox) {
        return "firefox"
    } else if (argv.opera) {
        return "opera"
    } else if (argv.safari) {
        return "safari"
    } else {
        console.error("Ongeldige browser!");
        process.exit(1);
    }
}

function getGridDetails(argv) {
    if (argv.grid) {
        return true
    } else {
        return false;
    }
}

module.exports = {
    "browserName": getBrowserName(argv),
    "gridEnabled": getGridDetails(argv)
}
