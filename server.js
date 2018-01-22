import express from 'express';
import bodyParser from 'body-parser';
// import oilRoutes from './routes/OilRoutes';
// import mongoose from 'mongoose';

// mongoose.set('debug', true);
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/oilAppDB');

const myMovieServer = express();
myMovieServer.use(bodyParser.json());
// myMovieServer.use(oilRoutes);

const port = process.env.PORT || 8080;
myMovieServer.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

/*
const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('server started');
*/

/*
const path = require('path');
const express = require('express');

const app = express();

// app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(__dirname + '/'));
app.set('port', process.env.PORT || 8080);

app.get('*', (req, res) =>{
  // res.sendFile(path.resolve(__dirname, 'index.html'));
  res.sendFile(path.resolve(__dirname, 'script.jsx'));
});

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

// app.use(express.static(__dirname + '/'));
// ////////////////////
// app.get('*', (req, res) =>{
  // res.sendFile(path.resolve(__dirname, 'index.html'));
// });
// ////////////////////
// not used // app.listen(port);
*/
