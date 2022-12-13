/*
Server for static website content
*/

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const ROUTES = [
  '/',
  '/home',
  '/about',
  '/contact',
  '/resume',
  '/work',
  '/work/*',
];

const app = express();
app.use(bodyParser.json());

const router = express.Router();

router.route('/')
    .get((req, res) => {
        fs.readFile(path.join(__dirname, 'build/index.html'), 'utf-8', (err, data) => {
            if (err) {
                return res.send(err).status(500);
            }

            res.set('Content-Type', 'text/html');
            return res.send(data);
        });
    });

app.use(express.static(path.join(__dirname, "build")));

// give access to all routes
for (const route of ROUTES) {
    app.use(route, router);
}

app.use('*', (req, res) => {
    return res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});