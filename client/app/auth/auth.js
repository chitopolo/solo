angular.module('deskbell.auth', [])

.controller('AuthController', function($scope, Auth) {
  angular.extend($scope, Auth);
  $scope.user = Auth.isAuth();

   //  $scope.signin()
   //    .then(function(data) {
   //  console.log('This is de DATA: ', data);
   //    $scope.user = data;
   // });

   //  $scope.signup()
   //    .then(function(data) {
   //  console.log('This is de DATA: ', data);
   // });
})
.factory('Auth', function () {
  var user = '';
  var signin = function (user) {
    Parse.initialize("ctKT4hA1TnqKN6Ze4RLs1M7NC3CIXlfGRYfwOQYl", "PSDPr1OqyO0ycuBJxf1bnQOrTkOjk1qYgUUujPoh");
    var Users = Parse.Object.extend("users");
    var query = new Parse.Query(Users);
    query.equalTo("username", user.username);
    query.equalTo("password", user.password);

    query.find({
      success: function(results) {
        alert("Successfully retrieved " + results.length + " scores.");
        // Do something with the returned Parse.Object values
        for (var i = 0; i < results.length; i++) { 
          var object = results[i];
          alert(object.id + ' - ' + object.get('username'));
        }
        user = object.get('username');
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  };

  var signup = function (user) {
    console.log('llego con estos datos: '+user);
    Parse.initialize("ctKT4hA1TnqKN6Ze4RLs1M7NC3CIXlfGRYfwOQYl", "PSDPr1OqyO0ycuBJxf1bnQOrTkOjk1qYgUUujPoh");

    var Users = Parse.Object.extend("users");
    var newUser = new Users();
      console.log('got inside of inner function');
      newUser.save(user).then(function(object) {
        alert("New User Created");
      });
  };

  var isAuth = function () {
    return user;
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});

