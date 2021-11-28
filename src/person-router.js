const { v4: uuidv4, validate: uuidValidate } = require('uuid');
const Router = require('./framework/Router');

let persons = [];


const router = new Router();

router.get('/person', (req, res) => {
  return res.send(200, persons);
});

router.get('/person/:id', (req, res) => {
  const personId = req.personId;

  if (!uuidValidate(personId)) {
    return res.send(400, 'invalid personId');
  }
 
  const searchResult = persons.filter(person => person.id === personId);

  if (searchResult.length !== 0) {
    return res.send(200, searchResult);
  } else {
    return res.send(404, "person didn\'t find");
  };
});

router.post('/person', (req, res) => {
  const person = req.body;
  
  if (Object.keys(person).length === 0) {
    return res.send(400, {message: 'body was empty'});
  };
  
  if (
    !Object.hasOwn(person, 'name') || 
    !Object.hasOwn(person, 'age') ||
    !Object.hasOwn(person, 'hobbies')
  ) {
    return res.send(400, {message: 'person\'s name, age and hobbies are required'});
  };
  const newPerson = { ...person, id: uuidv4() };
  persons.push(newPerson);
  return res.send(201, newPerson);
});

router.put('/person/:id', (req, res) => {
  const personId = req.personId;
  const newPersonData = req.body;
  let updatedPerson = {};

  if (!uuidValidate(personId)) {
    return res.send(400, 'invalid personId');
  };

  persons = persons.map(person => {
    if (person.id === personId) {
      updatedPerson = {
        ...person,
        ...newPersonData
      };
      return updatedPerson
    }
  });

  if (Object.keys(updatedPerson).length !== 0) {
    return res.send(200, updatedPerson);
  } else {
    return res.send(404, "person didn\'t find");
  };


});

router.delete('/person/:id', (req, res) => {
  const personId = req.personId;
  let isDeleted = false;

  if (!uuidValidate(personId)) {
    return res.send(400, 'invalid personId');
  };

  persons = persons.filter(person => {
    if (person.id !== personId) {
      return true;
    } else {
      isDeleted = true;
      return false;
    };
  });

  if (isDeleted) {
    return res.send(204, "person was delete");
  } else {
    return res.send(404, "person didn\'t find");
  };
});

module.exports = router;
