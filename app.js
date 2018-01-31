let http = require('http');

let fs = require('fs');

let url = require('url');

let bodyParser = require('body-parser');
let math = require('./lib');

let server = http.createServer();

let express = require('express');

let session = require('express-session');

let app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use("/assets", express.static('public'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

const PersonneModel = require('./models/Personne');


app.use(require('./midelwars/flash'));

app.get('/', (req, res) => {

    let userPromise = PersonneModel.all();

    userPromise.then(function (personnes) {
        res.render('page', {'personnes': personnes});
    }).catch(function (err) {
        console.log(err);
        res.render('page');

    })


});

app.post('/', (req, res) => {
    if (req.body.first_name && req.body.last_name && req.body.email) {

        let personne = new PersonneModel(req.body.first_name, req.body.last_name, req.body.email);
        personne.save(function (result) {
            req.flash('success', 'Ajout success');
            res.redirect('/');

        });


    } else {

        req.flash('error', 'veuillez saisir tout les champs');
        res.redirect('/');

    }

});

app.listen(8085);