import {TextFieldModule} from '@angular/cdk/text-field';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let CR = new Schema({
  type: {
    type: String
  },
  title: {
    type: String
  },
  number: {
    type: Number
  },
  description: {
    type: TextFieldModule
  },
  jiraLink: {
    type: String
  }
}, {
  collection: 'cr'
})

module.exports = mongoose.model('CR', CR)
