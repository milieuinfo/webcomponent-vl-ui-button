const http = require('http');

async function setUp(context, commands) {
    const hostname = 'demo.app.io';
    const port = '8080';
    const path = 'demo/performance.html';

    async function areDemoComponentsPresent() {
        await commands.navigate(`http://${hostname}:${port}/${path}`);
        const webdriver = context.selenium.webdriver;
        const driver = context.selenium.driver;
        const demos = await driver.findElements(webdriver.By.css('.demo'));
        return demos.length > 0;
    }

    return new Promise(resolve => {
        function poll() {
            setTimeout(async () => {
                http.get(`http://${hostname}:${port}`, async (res) => {
                    const { statusCode } = res;
                    if (statusCode === 200) {
                        context.log.info(`App available on ${hostname}:${port}.`);
                        resolve();
                        // try {
                        //     const demoComponents = await areDemoComponentsPresent();
                        //     if (demoComponents) {
                        //         resolve();
                        //     } else {
                        //         process.exit(5);
                        //     }
                        // } catch (e){
                        //     throw e;
                        // }
                    } else {
                        poll();
                    }
                }).on('error', () => {
                    context.log.error(`App not yet available on ${hostname}:${port}.`);
                    poll();
                });
            }, 5000);
        }

        poll();
    });
}

module.exports = async function (context, commands) {
    context.log.info("Waiting for webserver to start up ... ");
    await setUp(context, commands);
    context.log.info("Webserver started!");

    context.log.info("Starting script");
    await commands.measure.start('http://demo.app.io:8080/demo/performance.html');
    await commands.measure.start('Webcomponents');
    try {
        await commands.navigate('http://demo.app.io:8080/demo/performance.html');
        await commands.measure.stop();
    } catch (e) {

    }
}
