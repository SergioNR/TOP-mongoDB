import * as http from 'http';
import { TestRequest } from './TestRequest.mjs';
import fs from 'node:fs'


const server = http.createServer((req, res) => {

    res.writeHead(200, 
        {
            'Content-Type': 'text/html'
        }
    );

    const incomingURL = new URL(req.url, `http://${req.headers.host}`);

    const pathname = incomingURL.pathname;

    const incomingUrlParam = incomingURL.searchParams.get('url');

    const incomingEmailParam = incomingURL.searchParams.get('email');

    const newTestRequest = new TestRequest(incomingUrlParam, incomingEmailParam);

    console.log(newTestRequest);

    res.end();

});

server.listen(3000, `localhost`, () => {
  console.log('Server running at http://localhost:3000/');
});