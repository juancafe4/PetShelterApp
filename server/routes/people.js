const express = require('express');
const router = express.Router();
const Person = require('../models/person');

const Animal = require('../models/animalModel');

router.route('/')
  .get((req, res) => {
    Person.find({}, (err, people) => {
      res.status(err ? 400 : 200).send(err || people)
    }).populate('pets')
  })
router.route('/') .post((req, res) => {
    Person.create(req.body, (err, person) => {
      res.status(err ? 400 : 200).send(err || person)
    })
  })

router.route('/:id')
    .delete((req, res) => {
    Person.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    })
  })

router.put('/adopt/:id/addPet/:petId', (req, res) => {
  Person.findById(req.params.id, (err, person) => {
    if(err || !person) {
      return res.status(400).send(err || 'User not found.');
    }

    let petId = req.params.petId;
    Animal.findById(petId, (err , animal) => {
      console.log('animal ', animal)
      if(err || !animal) {
        return res.status(400).send(err || 'Animal not found.');
      }
      person.pets.push(petId);
      person.save((err, savedPerson) => {
        if (err) return res.status(400).send(err);

        animal.adopted = true;

        animal.save((err, savedAnimal) => {
          res.status(err ? 400 : 200).send(err || savedPerson);
        });
      });
    });
    
  });
})

// router.put('/:animalId/addOwner/:ownerId', (req, res) => {
//   Animal.findById(req.params.animalId, (err, animal) => {
//     if(err || !animal) {
//       return res.status(400).send(err || 'Animal not found.');
//     }
    
//     let ownerId = req.params.ownerId;

//     animal.owner = ownerId;

//     animal.save((err, savedAnimal) => {
//       res.status(err ? 400 : 200).send(err || savedAnimal);
//     })
//   });
// });
module.exports = router;
