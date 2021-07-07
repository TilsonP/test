const firebase = require('firebase');

class Login_Repository{

    constructor() {
        this.database = firebase.database
    }

    login(username, password, response) {
        this.database().ref('credentials').child(username).get()
            .then(function (snapshot) {
                //TODO: MAKE USER AND PASSWORD VALIDATION
                console.log(snapshot.val())
            })
    }

    create_user(body, response) {
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