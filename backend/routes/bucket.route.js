const express = require('express');
const app = express();
const bucketRoute = express.Router();

// users model
let bucket = require('../models/bucket');

// Add Employee
bucketRoute.route('/create').post((req, res, next) => {
    bucket.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Employees
bucketRoute.route('/').get((req, res) => {
  bucket.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
bucketRoute.route('/read/:id').get((req, res) => {
  bucket.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Delete employee
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

module.exports = bucketRoute;