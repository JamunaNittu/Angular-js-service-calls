angular.module("myapp").controller("myctrl",function($scope,myservice){
	myservice.getdata().then(function(response){
			$scope.tickets=response;

		},function(err){
			if(err){
				$scope.errorMessage="err";
			}
			else{
				$scope.errorMessage="err";
			}
		
		

});


	$scope.delete_ticket=function(id){
	
		myservice.deleteticket(id).then(function(response){
			console.log(response);
				alert("deleted succesfully");
			// $scope.tickets=response;

				myservice.getdata().then(function(response){
			$scope.tickets=response;

		},function(err){
			if(err){
				$scope.errorMessage="err";
			}
			else{
				$scope.errorMessage="err";
			}
		
		

});


		},function(err){
			if(err){
				$scope.errorMessage="err";
			}
			else{
				$scope.errorMessage="err";

			}
		})
	};
});