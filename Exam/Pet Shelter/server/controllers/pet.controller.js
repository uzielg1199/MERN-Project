const { response, request } = require('express');
const { Pet } = require('../models/pet.model');

module.exports.list = (request, response) => {
    Pet.find({})
        .then(pets => {
            response.json(pets);
        })
        .catch(err => {
            response.status(400).json(err);
        })
}

module.exports.create = (request, response) => {
    const { petName, petType, petDescription, skill1, skill2, skill3 } = request.body;
    Pet.create({
        petName,
        petType,
        petDescription, 
        skill1,
        skill2,
        skill3
    })
        .then(pet =>{
            response.json(pet)
        })
        .catch(err => {
            response.status(400).json(err);
        })
}

module.exports.detail = (request, response) => {
    const { id } = request.params;
    Pet.findOne({_id: id})
        .then(pets => {
            response.json(pets);
    })
        .catch(err => {
            response.status(400).json(err);
    })
}

module.exports.update = (request, response) => {
    const { id } = request.params;
    const { petName, petType, petDescription, skill1, skill2, skill3 } = request.body;
    Pet.findOneAndUpdate({_id: id}, {
        petName,
        petType,
        petDescription, 
        skill1,
        skill2,
        skill3
    },
        {
            new:true,
            useFindAndModify: true
        })
        .then(pets => {
            response.json(pets);
        })
        .catch(err => {
            response.status(400).json(err);
        })
}
module.exports.delete = (request, response) => {
    const { id } = request.params;
    Pet.deleteOne({_id: id})
        .then(deleteConfirmation => {
            response.json(deleteConfirmation)
        })
        .catch(err => {
            response.status(400).json(err);
        })
}