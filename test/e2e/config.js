let argv = require('yargs').argv;

function browserName() {
    if(argv) {
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
            process.exit(3);
        }
    } else {
        console.error("Geen argumenten meegegeven!");
        process.exit(1);
    }
}

function gridEnabled() {
    if(argv) {
        if (argv.grid) {
            return true
        } else {
            return false;
        }
    } else {
        console.error("Geen argumenten meegegeven!");
        process.exit(2);
    }
}

module.exports = {
    "browserName": browserName(),
    "gridEnabled": gridEnabled(),
    "gridUrl": "http://selenium-hub:4444/wd/hub"
}
