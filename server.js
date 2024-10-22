require('./logServerMetrics')
const http = require('http');
const os = require('os');
const express = require('express');

const hostname = '0.0.0.0';  // Bind to all interfaces
const port = 3000;
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    return res.status(200).json({
        message: `Hello World from ${os.hostname()}\n`
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});