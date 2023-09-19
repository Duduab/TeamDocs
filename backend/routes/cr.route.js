const express = require('express');
const crRoute = express.Router();

// Cr model
let Cr = require('../models/terms');

// Add Cr
crRoute.route('/addCr').post((req, res, next) => {
  Cr.Cr.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get Cr List
crRoute.route('/').get((req, res) => {
  Cr.Cr.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single CR
crRoute.route('/read/:id').get((req, res) => {
  Cr.Cr.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update CR
crRoute.route('/update/:id').put((req, res, next) => {
  Cr.Cr.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete CR
crRoute.route('/delete/:id').delete((req, res, next) => {
  Cr.Cr.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = crRoute;
