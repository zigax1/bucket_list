const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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