const { execSync } = require('child_process');
const argv = require('yargs').argv;

if(process.platform === "darwin") {
    execSync('docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-chrome.json http://host.docker.internal:8080/performance/performance.html', {stdio: 'inherit', cwd: __dirname});
    execSync('docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-firefox.json http://host.docker.internal:8080/performance/performance.html', {stdio: 'inherit', cwd: __dirname});
} else if(process.platform === "linux" && !argv.bamboo) {
    execSync('docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-chrome.json --network=host http://localhost:8080/performance/performance.html', {stdio: 'inherit', cwd: __dirname});
    execSync('docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-firefox.json --network=host http://localhost:8080/performance/performance.html', {stdio: 'inherit', cwd: __dirname});
} else if (argv.bamboo) {
    console.log('Running on Bamboo ...');
    execSync('docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-bamboo-chrome.json --network=host http://localhost:8080/performance/performance.html', {stdio: 'inherit', cwd: __dirname});
    execSync('docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-bamboo-firefox.json --network=host http://localhost:8080/performance/performance.html', {stdio: 'inherit', cwd: __dirname});
} else {
    console.error('This platform is not supported, exiting!');
    process.exit(2);
}
