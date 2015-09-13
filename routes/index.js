var dashboards = require('./dashboards');
var widgets = require('./widgets');

exports = module.exports = function (app) {

  app.get('/api/dashboards', dashboards.findAll);
  app.get('/api/dashboards/:dashboardId', dashboards.find);
  app.post('/api/dashboards', dashboards.create);
  app.put('/api/dashboards/:dashboardId', dashboards.update);
  app.del('/api/dashboards/:dashboardId', dashboards.destroy);

  app.get('/api/dashboards/:dashboardId/widgets', widgets.findAll);
  app.get('/api/dashboards/:dashboardId/widgets/:widgetId', widgets.find);
  app.post('/api/dashboards/:dashboardId/widgets', widgets.create);
  app.put('/api/dashboards/:dashboardId/widgets/:widgetId', widgets.update);
  app.del('/api/dashboards/:dashboardId/widgets/:widgetId', widgets.destroy);

  app.get('/api/me', function (req, res) {
    console.log(req.ntlm);
    res.send(req.ntlm);
  });

};
