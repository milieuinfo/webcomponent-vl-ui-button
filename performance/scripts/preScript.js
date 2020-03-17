const http = require('http');

function poll() {
    setInterval(() => {
        http.get('http://demo:8080', (res) => {
            const { statusCode } = res;
            if (statusCode !== 200) {
                console.log('Not ready yet!');
            } else {
                return;
            }
        });
    }, 1000);
}

poll();
