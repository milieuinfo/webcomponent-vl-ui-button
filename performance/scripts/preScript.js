const http = require('http');

module.exports = async function(context, commands) {
    return new Promise(resolve => {
        function poll() {
            setTimeout(() => {
                http.get('http://demo:8080', (res) => {
                    const { statusCode } = res;
                    if (statusCode !== 200) {
                        console.log('Not ready yet!');
                        poll();
                    } else {
                        resolve();
                    }
                });
            }, 1000);
        }

        poll();
    });
}
