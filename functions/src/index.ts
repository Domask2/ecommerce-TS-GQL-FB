import * as functions from "firebase-functions";
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: true
}));
app.use(express.json());

app.get('*', (req:any, res:any) => {
  res 
    .status(404)
    .send('404 Not Found.');
});

exports.api = functions.https.onRequest(app);

