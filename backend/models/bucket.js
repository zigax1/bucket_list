const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let bucket = new Schema({
   name: {
      type: String
   },
   location: {
      type: String
   }
},
     {
   collection: 'buckets'
})

module.exports = mongoose.model('bucket', bucket)