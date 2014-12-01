angular.module('deskbell.users', [])

.controller('UsersController', function ($scope, Links) {
   $scope.data = [];

   $scope.getLinks = function(){
   	Links.getLinks()
   	.then(function(data){
   		console.log('this is the data: ' + data);
      $scope.data.links = data;
      console.log($scope.data.links);
   	})	
   	.catch(function (error) {
        console.error(error);
      });
   };

   $scope.getLinks();

});

