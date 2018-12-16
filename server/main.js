const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
require('dotenv').config();
const { join } = require('path');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ServiceWorker = _app => (req, res) => {
  const filePath = join(__dirname, '../', '.next', 'service-worker.js');
  _app.serveStatic(req, res, filePath);
};

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get('/service-worker.js', ServiceWorker(app));
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
