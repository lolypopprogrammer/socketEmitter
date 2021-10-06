const {Schema, model} = require('mongoose');

const schema = new Schema({
    fullName: {type: String, required: true},
    photo: {type: String},
    cardNumber: {type: String},
    created: {type: Date, default: Date.now},
    updated: {type: Date}
});

module.exports = model('Employee', schema);
