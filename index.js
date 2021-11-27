const dotenv = require('dotenv');
const Server = require('./src/framework/Server.js');
const Router = require('./src/framework/Router.js');


dotenv.config();

const PORT = process.env.PORT || 8080;
const server = new Server();
const router = new Router();

router.get('/person', (req, res) => {
  res.end('RESPONSE');
});

server.addRouter(router);
server.listen(
  PORT, 
  () => console.log(`🚀 Server ready on PORT ${PORT}`)
  );
