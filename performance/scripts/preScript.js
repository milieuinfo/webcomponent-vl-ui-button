const http = require('http');

module.exports = async function (context, commands) {

    context.log.info("==================== Running prescript")
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
                    context.log.info("======================== Statuscode: " + statusCode);
                    if (statusCode === 200) {
                        context.log.info(`App available on ${hostname}:${port}.`);
                        try {
                            const demoComponents = await areDemoComponentsPresent();
                            if (demoComponents) {
                                resolve();
                            } else {
                                process.exit(5);
                            }
                        } catch (e){
                            throw e;
                        }
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
