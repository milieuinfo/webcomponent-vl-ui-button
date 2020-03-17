const http = require('http');

function poll() {

    let ready = false;
    let hostname = 'demo';
    let port = 8080;

    console.log(`Waiting for ${hostname}:${port} to become available`);
    do {
        setTimeout(() => {
            http.get(`http://${hostname}:${port}`, { timeout: 1000 }, (res) => {
                const { statusCode } = res;
                if (statusCode !== 200) {
                    console.log('Not ready yet!');
                } else {
                    ready = true;
                }
            });
        }, 50);
    } while (!ready);
    console.log(`http-server available on port ${port}`);
}

poll();
