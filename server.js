'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Sample Page</title>
      </head>
      <body>
        <h1>Welcome to my sample page!</h1>
        <p>This is some sample content for my page.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </body>
    </html>
  `);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
