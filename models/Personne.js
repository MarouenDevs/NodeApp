let sequelize = require('../core/db').sequelize;
const Sequelize = require('../core/db').Sequelize;

const Personne = sequelize.define('personne', {
    firstname: Sequelize.STRING,
    name: Sequelize.STRING,
    email: Sequelize.STRING,
}, {
    timestamps: false,
    tableName: 'personne'
});

/**
 *
 */
class PersonneModel {


    constructor(name, firstname, email) {

        this.name = name;
        this.firstname = firstname;
        this.email = email;
    }

    save(cb) {

        console.log(this);

        Personne.create(this).then((persone) => {
            cb(persone);
            console.log('saved!!!');
        });

    }

    static all() {
        return new Promise(
            (resolve, reject) => {

                Personne.findAll().then((personnes) => {

                    resolve(personnes);

                }).catch((err) => {

                    reject(err);
                });
            });
    }

}


module.exports = PersonneModel;