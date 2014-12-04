angular.module('deskbell.guests', [])

.controller('GuestsController', function($scope, Guests) {
  angular.extend($scope, Guests);
  
  $scope.data = [];
  $scope.getGuests()
  .then(function(data) {
    // console.log('This is de DATA: ', data);
      $scope.data.guests = data;
   });
})
.factory('Guests', function () {
  // Your code here
  var getGuests = function(){

    Parse.initialize("ctKT4hA1TnqKN6Ze4RLs1M7NC3CIXlfGRYfwOQYl", "PSDPr1OqyO0ycuBJxf1bnQOrTkOjk1qYgUUujPoh");

    var Guests = Parse.Object.extend("guests");
    var query = new Parse.Query(Guests);
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
      console.log('THIS IS DE RES!: ', jsonArray);
      return jsonArray;
    });;

    };
  var addGuest = function(guestData){
    // console.log('llego con estos datos: '+guestData);
    Parse.initialize("ctKT4hA1TnqKN6Ze4RLs1M7NC3CIXlfGRYfwOQYl", "PSDPr1OqyO0ycuBJxf1bnQOrTkOjk1qYgUUujPoh");

    var Guests = Parse.Object.extend("guests");
    var newGuest = new Guests();
      // console.log('got inside of inner function');
      newGuest.save(guestData).then(function(object) {
        alert("yay! it worked");
      });
   };

  return{
    getGuests: getGuests,
    addGuest: addGuest
    
  }
});

// var TestObject = Parse.Object.extend("TestObject");
      // var testObject = new TestObject();
      // testObject.save({foo: "bar"}).then(function(object) {
      //   alert("yay! it worked");
      // });