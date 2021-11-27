const Router = require('./framework/Router');

const persons = [
  {
    id: 1,
    name: 'Tommy',
    age: 30,
    hobbies: ['bowling', 'hiking', 'football'],
  },
  {
    id: 2,
    name: 'John',
    age: 40,
    hobbies: ['hiking', 'table tennis', 'swimming'],
  },
];


const router = new Router();

router.get('/person', (req, res) => {
  res.send(persons);
});

// router.post('/person', (req, res) => {
//   res.end('RESPONSE');
// });

module.exports = router;
