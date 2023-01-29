const router = require("express").Router();
 
//const mongoose = require('mongoose');
 
const Product = require('../models/Product.model');
 
//  POST /api/resources  -  Creates a new resource
router.post('/products', (req, res, next) => {
  const {name} = req.body;

  Product.create({ name })
    .then(newProduct => {
      console.log('new product created')
    })
    .catch(err => {
        console.log("error crating new resource", err);
        res.status(500).json(err)
    });
});

 
module.exports = router;