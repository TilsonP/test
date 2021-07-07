const express = require('express');
const router = express.Router();
const EstateRepository = require("../infrastructure/repositories/estate_repository");
const repository = new EstateRepository();


router.get('/',(request, response) => {
    repository.find_all((err,data) => {
        response.send(data)
    })
})

router.get('/identification', (request, response) => {
    repository.find_one(request.query.identification,(err,data) => {
        response.send(data)
    });
})

router.post('/',(request, response) => {
    console.log(request.body)
    repository.save(request.body, (err,data) => {
        response.send(data)
    });
})

module.exports = router