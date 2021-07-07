const firebase = require('firebase');

class Estate_repository{

    constructor() {
        this.database = firebase.database
    }

    find_all(response){
        //TODO: VALIDATE THIS METHOD
       this.database().ref('estates').get()
            .then(function (snapshot) {
                response(null,snapshot.val())
            })
    }

    find_one(identification, response) {

    }

    save(body, response) {
        this.database().ref('estates').child(body.identification)
            .set({
                identification: body.identification,
                name: body.name,
                address: body.address,
                latitude: body.latitude,
                longitude: body.longitude
            })
            .then(r => response(null, r));
    }
}

module.exports = Estate_repository;