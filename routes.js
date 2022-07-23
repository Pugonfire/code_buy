const routes = require('next-routes')();

routes
  .add('/tasks/new', '/tasks/new')
  .add('/tasks/:address', '/tasks/show')
  .add('/tasks/:address/requests', '/tasks/requests/index')
  .add('/tasks/:address/requests/new', '/tasks/requests/new');

module.exports = routes;
