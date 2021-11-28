const dotenv = require('dotenv');
const Server = require('./src/framework/Server');
const personRouter = require('./src/person-router');
const parserJson = require('./src/framework/parserJson');
const parserUrl = require('./src/framework/parseUrl');

dotenv.config();

const PORT = process.env.PORT || 8080;
const server = new Server();

server.use(parserJson);
// TODO: update baseURL
server.use(parserUrl('http://localhost:8080/'));

server.addRouter(personRouter);
server.listen(
  PORT, 
  () => console.log(`🚀 Server ready on PORT ${PORT}`)
  );
