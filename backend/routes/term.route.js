const express = require('express');
const termRoute = express.Router();

// Term model
let Term = require('../models/terms');

// Add Term
termRoute.route('/addTerm').post((req, res, next) => {
  Term.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Terms
termRoute.route('/').get((req, res) => {
  Term.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single term
termRoute.route('/read/:id').get((req, res) => {
  Term.findById(req.params.term, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Terms
termRoute.route('/update/:id').put((req, res, next) => {
  Term.findByIdAndUpdate(req.params.id, {
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

// Delete term
termRoute.route('/delete/:id').delete((req, res, next) => {
  Term.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = termRoute;