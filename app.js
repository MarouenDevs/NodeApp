let http = require('http');

let fs = require('fs');

let url = require('url');

let bodyParser = require('body-parser');
let math = require('./lib');

let server = http.createServer();

let express = require('express');

let sesssion = require('express-session');

let app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use("/assets", express.static('public'));

app.get('/', (req, res) => {

    res.render('page');
});

app.post('/', (req, res) => {
    if (req.body.first_name && req.body.last_name && req.body.email) {

        res.render('page');

    } else {

        res.render('page', {'error': "Data not complet"});

    }

});

app.listen(8080);