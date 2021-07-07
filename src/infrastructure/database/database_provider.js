const firebase = require('firebase');

class Database_provider{

    init(){
        const firebaseConfig = {
            apiKey: "AIzaSyBnGwvntQkRU1pOX0DCtyXEFHfcH0Au79k",
            authDomain: "suyaapp.firebaseapp.com",
            databaseURL: "https://suyaapp-default-rtdb.firebaseio.com",
            projectId: "suyaapp",
            storageBucket: "suyaapp.appspot.com",
            messagingSenderId: "309032751766",
            appId: "1:309032751766:web:c7d7cb674b9ec4b6eda8b7"
        };

        firebase.initializeApp(firebaseConfig)
    }
}

module.exports = Database_provider