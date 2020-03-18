const http = require('http');

function poll() {
    setTimeout(() => {
        http.get('http://demo:8080', (res) => {
            const { statusCode } = res;
            if (statusCode !== 200) {
                console.log('Not ready yet!');
                poll();
            }
        });
    }, 1000);
}

poll();
