

class Personne {


    constructor(name, firstname, email) {

        this.name = name;
        this.firstname = firstname;
        this.email = email;
    }

     save(cb) {
        let db = require('../core/db');
        let query = db.query('INSERT INTO personne SET ?', this, function (error, results, fields) {
            if (error) throw error;
            // else
            cb(results);
            console.log('saved!!!');
        });
        db.end();
    }

    static all() {


    }

}

module.exports = Personne;