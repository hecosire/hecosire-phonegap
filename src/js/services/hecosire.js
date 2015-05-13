angular.module('HeCoSiRe.services.hecosire', [])

.factory('loginHecosire', function($http){
  return function(username, password, done) {
    var payload = {user: {email: username, password: password} };
    console.log(payload);
    $http.post('http://hecosire.com/api/v1/users/sign_in', payload)
        .success(function(data, status, headers, config) {
          console.log("yaya",data, status, headers);
          console.log(data['auth_token'])
        })
        .error(function(data, status, headers, config) {
          console.log("buuuu")
        });
  };
});