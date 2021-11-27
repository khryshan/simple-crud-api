const dotenv = require('dotenv');
const Server = require('./src/framework/Server');
const personRouter = require('./src/person-router');
const parserJson = require('./src/framework/parserJson');


dotenv.config();

const PORT = process.env.PORT || 8080;
const server = new Server();

server.use(parserJson);
server.addRouter(personRouter);
server.listen(
  PORT, 
  () => console.log(`🚀 Server ready on PORT ${PORT}`)
  );
