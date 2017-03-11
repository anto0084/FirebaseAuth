angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('myTrips', {
    url: '/myTrips',
    templateUrl: 'templates/myTrips.html',
    controller: 'myTripsCtrl'
  })

    .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('preApproval', {
    url: '/pre_approval',
    templateUrl: 'templates/preApproval.html',
    controller: 'preApprovalCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});