const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Term = new Schema({
    term: {
      type: String
   },
   shortcut: {
      type: String
   },
   introduction: {
      type: String
   }
}, {
   collection: 'terms'
})

module.exports = mongoose.model('Term', Term)