const express = require('express');
const app = express();
const bucketRoute = express.Router();

let bucket = require('../models/bucket');

// add bucket
bucketRoute.route('/create').post((req, res, next) => {
    bucket.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// get all buckets
bucketRoute.route('/').get((req, res) => {
  bucket.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// delete bucket
bucketRoute.route('/delete/:id').delete((req, res, next) => {
  bucket.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// get one bucket
bucketRoute.route('/read/:id').get((req, res) => {
  bucket.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = bucketRoute;