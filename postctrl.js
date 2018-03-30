app.controller("postctrl",function($scope,myservice){
	$scope.post_formdata=function(){
		console.log($scope.data);
		myservice.postdata(JSON.stringify($scope.data)).then(function(response){
			$scope.tickets=response;

		},function(err){
			if(err){
				$scope.errorMessage="err";
			}
			else{
				$scope.errorMessage="err";
			}
		})
	}

})