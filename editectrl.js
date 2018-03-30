app.controller("editctrl",function(	$scope,myservice,$stateParams){

		myservice.editdata($stateParams.ticketid).then(function(response){
			console.log(response);
			$scope.data=response;



		},function(err){
			if(err){
				$scope.errorMessage="err";
			}
			else{
				$scope.errorMessage="err";
			
			}
		})
		$scope.updateform=function(){
			myservice.updatedata($stateParams.ticketid,JSON.stringify($scope.data)).then(function(response){
				console.log(response);
				// $scope.tickets=response;
				// console.log($scope.tickets);
			},
			function(err){
				if(err){
					$scope.errorMessage="err";
				}
				else{
					$scope.errorMessage="err";
				}
			})
		}
	
})