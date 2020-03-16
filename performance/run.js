const { execSync } = require('child_process');

if(process.platform === "darwin") {
    execSync('docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:12.2.0 --config=config/config-chrome.json http://host.docker.internal:8080/performance/performance.html', {stdio: 'inherit', cwd: __dirname});
    execSync('docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:12.2.0 --config=config/config-firefox.json http://host.docker.internal:8080/performance/performance.html', {stdio: 'inherit', cwd: __dirname});
} else if(process.platform === "linux") {
    execSync('docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:12.2.0 --config=config/config-chrome.json --network=host http://host.docker.internal:8080/performance/performance.html', {stdio: 'inherit', cwd: __dirname});
    execSync('docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:12.2.0 --config=config/config-chrome.json --network=host http://host.docker.internal:8080/performance/performance.html', {stdio: 'inherit', cwd: __dirname});
} else {
    console.error('This platform is not supported, exiting!');
    process.exit(1);
}
