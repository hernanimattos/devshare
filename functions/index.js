const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/login', (req, res) => {
	res.send('deu cetto');
})

exports.app = functions.https.onRequest(app);
