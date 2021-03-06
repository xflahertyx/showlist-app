'use strict';

module.exports = function(app) {
  app.directive('showFormDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: '/templates/shows/new_show_form.html',
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

