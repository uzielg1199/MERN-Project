const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [
            true,
            "Pet Name should be at least 3 characters!"
        ]
    },
    petType: {
        type: String,
        required: [
            true,
            "Pet Type should be at least 3 characters!"
        ]
    },
    petDescription: {
        type: String,
        required: [
            true,
            "Pet Description should be at least 3 characters!"
        ]
    },
    skill1: {type: String},
    skill2: {type: String,},
    skill3: {type: String,}
}, {timestamps: true})

module.exports.Pet = mongoose.model('Pet', PetSchema);