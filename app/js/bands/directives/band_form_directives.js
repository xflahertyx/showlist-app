'use strict';

module.exports = function(app) {
  app.directive('bandFormDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: '/templates/directives/login_form.html',
      scope: {
        save: '&',
        buttonText: '=',
        labelText: '@',
        note: '='
      },
      transclude: true
    };
  });
};