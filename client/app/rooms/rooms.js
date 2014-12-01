angular.module('deskbell.rooms', [])

.controller('RoomsController', function ($scope, Rooms) {
   $scope.data = [];

   $scope.getRooms = function(){
   	Rooms.getRooms()
   	.then(function(data){
   		console.log('this is the data: ' + data);
      $scope.data.rooms = data;
      console.log($scope.data.rooms);
   	})	
   	.catch(function (error) {
        console.error(error);
      });
   };


   $scope.addRoom = function(){
    Rooms.addRoom().
    then(function(data){
      console.log('this is the data ' + data);
      $scope.data.rooms
    })
   }

   $scope.getRooms();

})
.factory('Rooms', function ($http) {
  // Your code here
  var getRooms = function(){
      return $http({
        method: 'GET',
        url:'/api/rooms'
      })
      .then(function(res){
        return res.data;
      })
    };
  var addRoom = function(link){
    return $http({
        method: 'POST',
        url:'/api/rooms',
        data: {
          url:link
        }
      });
   };

  return{
    getLinks: getRooms,
    addLink: addRoom
    
  }
});

// var TestObject = Parse.Object.extend("TestObject");
      // var testObject = new TestObject();
      // testObject.save({foo: "bar"}).then(function(object) {
      //   alert("yay! it worked");
      // });