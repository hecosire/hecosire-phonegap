angular.module('HeCoSiRe', [
  'ngRoute',
  'mobile-angular-ui',
  'HeCoSiRe.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});