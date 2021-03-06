var dashboards = require('./dashboards');
var widgets = require('./widgets');
var types = require('./types');

exports = module.exports = function (app) {

  // Dashboards
  app.get('/api/dashboards', dashboards.findAll);
  app.get('/api/dashboards/:dashboardId', dashboards.find);
  app.post('/api/dashboards', dashboards.create);
  app.post('/api/dashboards/:dashboardId', dashboards.update);
  app.del('/api/dashboards/:dashboardId', dashboards.destroy);

  // Widgets
  app.get('/api/dashboards/:dashboardId/widgets', widgets.findAll);
  app.get('/api/dashboards/:dashboardId/widgets/:widgetId', widgets.find);
  app.post('/api/dashboards/:dashboardId/widgets', widgets.create);
  app.post('/api/dashboards/:dashboardId/widgets/:widgetId', widgets.update);
  app.post('/api/dashboards/:dashboardId/widgets/:widgetId/data', widgets.updateClient);
  app.del('/api/dashboards/:dashboardId/widgets/:widgetId', widgets.destroy);

  // Types
  app.get('/api/types', types.findAll);
  app.get('/api/types/:typeId/:field?', types.find);

  // Account
  app.get('/api/me', function (req, res) {
    console.log(req.ntlm);
    res.send(req.ntlm);
  });

};
