var app=angular.module("myapp",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/postform');

	$stateProvider
	
	.state("/postform",{
		url:'/postform',
		templateUrl:'postform.html',
		controller:'postctrl'
		
	})
	.state("/gettable",{
		url:'/gettable',
		templateUrl:'gettable.html',
		controller:'myctrl'
		
	})
	.state("edit_ticket",{
		url:'/updateform/:ticketid',
		templateUrl:'updateform.html',
		controller:'editctrl'
		
	})
})



// .service('dataService', function($http) {

//     this.getData = function() {
//         $http({
//             method: 'GET',
//             url: 'https://jsonplaceholder.typicode.com/posts',
           
//         }).success(function(data){
//         	console.log("gdh");
//             // With the data succesfully returned, call our callback
            
//         }).error(function(){
//             alert("error");
//         });
//      }
// })

// .controller('myctrl', function($scope, dataService) {
//     $scope.tickets = null;
//     dataService.getData(function(dataResponse) {
//         $scope.tickets = dataResponse;
//     });
// })