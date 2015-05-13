angular.module('HeCoSiRe.controllers.Main', [
  'HeCoSiRe.services.hecosire'
  ])

.controller('MainController', function($scope, loginHecosire){

  $scope.login = function() {
    console.log($scope.email, $scope.password)
    loginHecosire($scope.email, $scope.password, function(location, weather){
        
       });
    //alert('hey');
  }
  
});