const mysql = require('mysql')
var express = require('express')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

cred = require('./keys/getcred');

credentials = {
    host: cred.storageConfig.host,
    user: cred.storageConfig.user,
    password: cred.storageConfig.password,
    database: cred.storageConfig.mng_schema
}

const conn = mysql.createConnection(credentials);


conn.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});