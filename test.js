
const assert = require('assert');
const http = require('http');
const server = require('./server');

server.listen(0, () => {
    const port = server.address().port;

    function makeRequest(path, callback) {
        http.get(
            `http://localhost:${port}${path}`,
            (response) => {
                let data = '';

                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    callback(response.statusCode, data);
                });
            }
        ).on('error', (error) => {
            console.error(error.message);
            process.exitCode = 1;
            server.close();
        });
    }

    makeRequest('/health', (status, data) => {
        try {
            assert.strictEqual(status, 200);
            assert.strictEqual(JSON.parse(data).status, 'OK');

            makeRequest('/', (homeStatus, homeData) => {
                try {
                    assert.strictEqual(homeStatus, 200);
                    assert.ok(
                        homeData.includes('Welcome to My DevOps Web App!')
                    );

                    console.log('All tests passed successfully!');
                } catch (error) {
                    console.error('Test failed:', error.message);
                    process.exitCode = 1;
                } finally {
                    server.close();
                }
            });
        } catch (error) {
            console.error('Test failed:', error.message);
            process.exitCode = 1;
            server.close();
        }
    });
});

