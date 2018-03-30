app.controller("deletectrl",function($scope,$stateParams,myservice){

	
	$scope.delete_ticket=function(id){
		alert("fgghgg");
		myservice.deleteticket(id).then(function(response){
			$scope.tickets=response;
		},function(err){
			if(err){
				$scope.errorMessage="err";
			}
			else{
				$scope.errorMessage="err";

			}
		})
	};
})