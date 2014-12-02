angular.module('deskbell.rooms', [])

.controller('RoomsController', function ($scope, Rooms) {
   $scope.data = [];

   $scope.getRooms = function(){
   	Rooms.getRooms()
   	.then(function(data){
   		console.log('this is the data: ', data);
      $scope.data.rooms = data;
      console.log($scope.data.rooms);
   	})	
   	.catch(function (error) {
        console.error(error);
      });
   };


   $scope.addRoom = function(roomData){
    Rooms.addRoom(roomData)
    .then(function(data){
      console.log('this is the data ' , data);
      $scope.data.rooms
    })
    .catch(function (error) {
        console.error(error);
      });
   }

   // $scope.getRooms();

})
.factory('Rooms', function ($http) {
  // Your code here
  var getRooms = function(){

    Parse.initialize("ctKT4hA1TnqKN6Ze4RLs1M7NC3CIXlfGRYfwOQYl", "PSDPr1OqyO0ycuBJxf1bnQOrTkOjk1qYgUUujPoh");

    var Rooms = Parse.Object.extend("rooms");
    var query = new Parse.Query(Rooms);
     return query.find({
       success: function(results) {
         // results is an array of Parse.Object.
        console.log('success');
        var code = results.get("code");
        var hasTv = results.get("hasTv");
        var maxOcc = results.get("maxOcc");
        var numBeds = results.get("numBeds");
        var other = results.get("other");
        var price = results.get("price");



       },

       error: function(error) {
         // error is an instance of Parse.Error.
        console.log('error');

       }
     });

    };
  var addRoom = function(roomData){
    console.log('llego con estos datos: '+roomData);
    Parse.initialize("ctKT4hA1TnqKN6Ze4RLs1M7NC3CIXlfGRYfwOQYl", "PSDPr1OqyO0ycuBJxf1bnQOrTkOjk1qYgUUujPoh");

    var Rooms = Parse.Object.extend("rooms");
    var newRoom = new Rooms();
      console.log('got inside of inner function');
      newRoom.save(roomData).then(function(object) {
        alert("yay! it worked");
      });
   };

  return{
    getRooms: getRooms,
    addRoom: addRoom
    
  }
});

// var TestObject = Parse.Object.extend("TestObject");
      // var testObject = new TestObject();
      // testObject.save({foo: "bar"}).then(function(object) {
      //   alert("yay! it worked");
      // });