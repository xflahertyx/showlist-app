'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

var showlistApp = angular.module('showlistApp', ['ngRoute', 'ngCookies', 'base64']);

//services
require('./services/copy')(showlistApp);
require('./services/rest_resource')(showlistApp);
require('./auth/services/auth_service')(showlistApp);

//controllers
require('./shows/controllers/showsController')(showlistApp);
require('./auth/controllers/auth_controller')(showlistApp);
require('./venues/controllers/venue_controller')(showlistApp);
require('./bands/controllers/band_controller')(showlistApp);


//directives
require('./shows/directives/show_form_directive')(showlistApp);
require('./shows/directives/show-card_directive')(showlistApp);
require('./auth/directives/auth_form_directive')(showlistApp);
require('./venues/directives/venue_form_directive')(showlistApp);

showlistApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/shows', {
      templateUrl: 'templates/shows/shows_view.html',
      controller: 'showsController'
    })
    .when('/login', {
      templateUrl: 'templates/auth/login_form.html',
      controller: 'authController'
    })
    .when('/new-show', {
      templateUrl: 'templates/shows/new_show_form.html',
      controller: 'showsController'
    })
    .when('/new-venue', {
      templateUrl: 'templates/venues/new_venue_form.html',
      controller: 'venueController'
    })
    .when('/venue', {
      templateUrl: 'templates/venues/venue-card.html',
      controller: 'venueController'
    })
    .when('/new-band', {
      templateUrl: 'templates/artists/new-artist-form.html',
      controller: 'band-controller'
    })
    .when('/', {
      redirectTo: '/shows'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);
