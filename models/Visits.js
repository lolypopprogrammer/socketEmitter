const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  employee: {type: Types.ObjectId, ref: 'Employee'},
  date: {type: Date},
  created: {type: Date, default: Date.now}
});

module.exports = model('Visits', schema);
