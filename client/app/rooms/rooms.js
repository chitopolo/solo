angular.module('deskbell.rooms', [])

.controller('RoomsController', function($scope, Rooms) {
  angular.extend($scope, Rooms);
   

   $scope.data = [];
   

  $scope.getRooms()
  .then(function(data) {
    // console.log('This is de DATA: ', data);
      $scope.data.rooms = data;
   });


})
.factory('Rooms', function () {
  // Your code here
  var getRooms = function(){

    Parse.initialize("ctKT4hA1TnqKN6Ze4RLs1M7NC3CIXlfGRYfwOQYl", "PSDPr1OqyO0ycuBJxf1bnQOrTkOjk1qYgUUujPoh");

    var Rooms = Parse.Object.extend("rooms");
    var query = new Parse.Query(Rooms);
     return query.find({
       success: function(theItem) {
        console.log('success');
         
       },

       error: function(error) {
         // error is an instance of Parse.Error.
        console.log('error');

       }
     }).then(function(res) {
      var jsonArray = [];
         for(var i = 0; i < res.length; i++) {
           jsonArray.push(res[i].toJSON());
        }; 
      // console.log('THIS IS DE RES!: ', jsonArray);
      return jsonArray;
    });;

    };
  var addRoom = function(roomData){
    console.log('llego con estos datos: '+roomData);
    Parse.initialize("ctKT4hA1TnqKN6Ze4RLs1M7NC3CIXlfGRYfwOQYl", "PSDPr1OqyO0ycuBJxf1bnQOrTkOjk1qYgUUujPoh");

    var Rooms = Parse.Object.extend("rooms");
    var newRoom = new Rooms();
      // console.log('got inside of inner function');
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