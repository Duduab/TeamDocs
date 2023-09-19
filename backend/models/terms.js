// Requiring module
const mongoose = require('mongoose');
const {TextFieldModule} = require("@angular/cdk/text-field");

// Terms Modal Schema
const termsSchema = new mongoose.Schema({
  term: String,
  shortcut: String,
  introduction: String
});

// Student Modal Schema
const crSchema = new mongoose.Schema({
  type: String,
  title: String,
  number: Number,
  description: String,
  jiraLink: String
});

// Creating model objects
const Cr = mongoose.model('cr', crSchema);
const Term = mongoose.model('term', termsSchema);

// Exporting our model objects
module.exports = {
  Cr, Term
}

// const Schema = mongoose.Schema;
//
// // Define collection and schema
// let Term = new Schema({
//     term: {
//       type: String
//    },
//    shortcut: {
//       type: String
//    },
//    introduction: {
//       type: String
//    }
// }, {
//    collection: 'terms'
//    collection: 'terms'
// })
//
// module.exports = mongoose.model('Term', Term)
