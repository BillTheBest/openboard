angular.module('openboard').controller('HomeCtrl', function ($scope, Dashboard, $state, toastr) {

  $scope.dashboards = Dashboard.query();

  $scope.publicDashboards = Dashboard.query({'public': 1});

  $scope.schema = {
    type: "object",
    properties: {
      title: {
        type: "string",
        minLength: 2,
        required: true,
        title: "Create a new Dashboard",
        description: "Pick a name for your dashboard",
        "x-schema-form": {
          placeholder: "My Business or Website"
        }
      }
    }
  };

  $scope.form = [
    "*",
    {
      type: "submit",
      title: "Create"
    }
  ];

  $scope.model = {};

  $scope.onSubmit = function (form) {
    $scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      var dash = new Dashboard();
      dash.title = $scope.model.title;
      dash.$save(function (res) {
        toastr.success('Dashboard Created!', res.title);
        $state.go('dashboard', {dashboardId: res.id});
      }, function (err) {
        toastr.warning(err.data.message, err.data.name);
      });
    }
  }

});
