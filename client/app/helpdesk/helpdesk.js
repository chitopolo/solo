

angular.module('deskbell.helpdesk', [])

   .controller('HelpdeskController', function($scope) {
  $scope.data = [];

   $scope.data.food = food;

   });











var food = [{
  name:"Hamburguer",
  price:'23',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dui gravida, iaculis odio in, vestibulum eros. Nam lorem arcu, dictum non sapien et, vestibulum pellentesque nisi. Praesent ultricies augue quis neque dapibus, ac feugiat ipsum maximus. Etiam eleifend nibh in laoreet laoreet. Quisque eu felis purus. Donec id metus erat. Integer nisl nunc, pellentesque sit amet hendrerit in, varius non nisl. Nam gravida euismod lectus tempor consectetur. Mauris eget mollis mauris, vel dapibus ante. Curabitur id egestas neque, nec volutpat massa.',
  category: 'food',
  room_id: 'Room123'
},
{
  name:"Pizza",
  price:'8',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dui gravida, iaculis odio in, vestibulum eros. Nam lorem arcu, dictum non sapien et, vestibulum pellentesque nisi. Praesent ultricies augue quis neque dapibus, ac feugiat ipsum maximus. Etiam eleifend nibh in laoreet laoreet. Quisque eu felis purus. Donec id metus erat. Integer nisl nunc, pellentesque sit amet hendrerit in, varius non nisl. Nam gravida euismod lectus tempor consectetur. Mauris eget mollis mauris, vel dapibus ante. Curabitur id egestas neque, nec volutpat massa.',
  category: 'food',
  room_id: 'Room123'
},
{
  name:"Fajitas",
  price:'11',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dui gravida, iaculis odio in, vestibulum eros. Nam lorem arcu, dictum non sapien et, vestibulum pellentesque nisi. Praesent ultricies augue quis neque dapibus, ac feugiat ipsum maximus. Etiam eleifend nibh in laoreet laoreet. Quisque eu felis purus. Donec id metus erat. Integer nisl nunc, pellentesque sit amet hendrerit in, varius non nisl. Nam gravida euismod lectus tempor consectetur. Mauris eget mollis mauris, vel dapibus ante. Curabitur id egestas neque, nec volutpat massa.',
  category: 'food',
  room_id: 'Room123'
},
{
  name:"Burritos",
  price:'14',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dui gravida, iaculis odio in, vestibulum eros. Nam lorem arcu, dictum non sapien et, vestibulum pellentesque nisi. Praesent ultricies augue quis neque dapibus, ac feugiat ipsum maximus. Etiam eleifend nibh in laoreet laoreet. Quisque eu felis purus. Donec id metus erat. Integer nisl nunc, pellentesque sit amet hendrerit in, varius non nisl. Nam gravida euismod lectus tempor consectetur. Mauris eget mollis mauris, vel dapibus ante. Curabitur id egestas neque, nec volutpat massa.',
  category: 'food',
  room_id: 'Room123'
},
{
  name:"Salad",
  price:'9',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dui gravida, iaculis odio in, vestibulum eros. Nam lorem arcu, dictum non sapien et, vestibulum pellentesque nisi. Praesent ultricies augue quis neque dapibus, ac feugiat ipsum maximus. Etiam eleifend nibh in laoreet laoreet. Quisque eu felis purus. Donec id metus erat. Integer nisl nunc, pellentesque sit amet hendrerit in, varius non nisl. Nam gravida euismod lectus tempor consectetur. Mauris eget mollis mauris, vel dapibus ante. Curabitur id egestas neque, nec volutpat massa.',
  category: 'food',
  room_id: 'Room123'
}
];