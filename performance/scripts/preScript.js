const http = require('http');

module.exports = async function (context) {

    const hostname = 'demo';
    const port = '8080';

    return new Promise(resolve => {
        function poll() {
            setTimeout(() => {
                http.get(`http://${hostname}:${port}`, (res) => {
                    const { statusCode } = res;
                    if (statusCode === 200) {
                        context.log.info(`App available on ${hostname}:${port}.`);
                        resolve();
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
