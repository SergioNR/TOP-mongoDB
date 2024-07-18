import * as http from 'http';
import { testRequestCollection } from './mongoDB.mjs';
import { TestRequest } from './TestRequest.mjs';
import fs from 'node:fs'


const server = http.createServer((req, res) => {
  
  /* 1- entender la url entrande
  2- establecer los headers
  3- llamar a la BBDD para crear el usuario
  */ 


  
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


    try {
        testRequestCollection.insertOne(newTestRequest).then((result) => {
            console.log(result);
        });
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log(`TestRequest created`);
    }
    
    res.end();

});

server.listen(3000, `localhost`, () => {
  console.log('Server running at http://localhost:3000/');
});