const http = require('http');
const app = require('./app');

require('./models');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`Server is listening http://localhost:${PORT}`)
);

// post / api / users;
// index - app - router - usersRouter - n*mw - controller - model;

// delete /api/users/5

// get /api/users/
// 1 навысити обробник(и) на ендпойнт
