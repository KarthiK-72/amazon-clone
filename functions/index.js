/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// eslint-disable-next-line no-unused-vars
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51J9DOlSF7tQRNhd2ze8QTWGPtPFFeCuziNVCeUsA1YZsMzYKLUCn8gCgFEnG3nhuTlwBCU53TioMnUnCD9ffvN6l00uxqz9lDv"
);

// API

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

exports.api = functions.https.onRequest(app);
