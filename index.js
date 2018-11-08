'use strict';
 
const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json()); // creates http server
//const token = ''; // type here your verification token
const {dialogflow} = require ('actions-on-google');

const appfulfillment = dialogflow();

const WELCOME_INTENT = 'Default Welcome Intent';
const FALLBACK_INTENT = 'Default Fallback Intent';
const LOOKING_FOR_QUOTE_INTENT = 'Antwoord';
const QUOTE_TYPE_ENTITY = 'antwoordtype';

// app.get('/', (req, res) => {
// 	 res.write('<p>hi there!</p>');
// });
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
 
// app.post('/', (req, res) => { 
	console.log("post");
    appfulfillment.intent(WELCOME_INTENT, (conv) => {
	    conv.ask("welkom bij het dashboard!");
	});
	appfulfillment.intent(FALLBACK_INTENT, (conv) => {
	    conv.ask("wat?");
	});
	appfulfillment.intent('Antwoord', (conv) => {
		console.log("hey!");
	     const quote_type = conv.parameters['antwoordtype'].toLowerCase();
	     if (quote_type == "plus") {
	     conv.ask("fruit plus 1");
	     } else if (quote_type == "min") {
	     conv.ask("fruit min 1");
	     } else {
	         conv.ask("dit is de overige statement");
	     }
	});
// });

// express().use(bodyParser.json(), appfulfillment).listen(3000);