const express = require('express')
const estate = require('./controller/estate_controllers');
const app = express()
const cors = require('cors')
const Database = require('./infrastructure/database/database_provider')
const DB = new Database()
const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(express.json())
app.use(cors())
app.use('/api/estate', estate);
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.listen(PORT, () => {
    DB.init()
    console.log(`listening on port ${PORT}`)
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});