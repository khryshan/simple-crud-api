const { v4: uuidv4 } = require('uuid');
const Router = require('./framework/Router');

const persons = [];


const router = new Router();

router.get('/person', (req, res) => {
  return res.send(200, persons);
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

module.exports = router;
