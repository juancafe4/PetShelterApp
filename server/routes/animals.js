const express = require('express');
const router = express.Router();
const Animal = require('../models/animal')

router.route('/')
  .get((req, res) => {
    Animal.find({}, (err, animals) => {
      res.status(err ? 400 : 200).send(err || animals)
    })
  })
  .post((req, res) => {
    Animal.create(req.body, (err, animal) => {
      res.status(err ? 400 : 200).send(err || animal)
    })
  })

router.get('/:id', (req, res) => {
  //Find Animal by id
  Animal.findById(req.params.id, (err, animal) => {
    if(err || !animal) {
       return res.status(400).send(err || 'Animal not found.');
    }
    res.send(animal)
  }).populate('owner')
})

router.route('/:id')
    .delete((req, res) => {
    Animal.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    })
  })
router.put('/:animalId/addOwner/:ownerId', (req, res) => {
  Animal.findById(req.params.animalId, (err, animal) => {
    if(err || !animal) {
      return res.status(400).send(err || 'Animal not found.');
    }
    
    let ownerId = req.params.ownerId;

    animal.owner = ownerId;

    animal.save((err, savedAnimal) => {
      res.status(err ? 400 : 200).send(err || savedAnimal);
    })
  });
});
module.exports = router;