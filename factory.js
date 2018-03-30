angular.module("myapp").factory("myservice",function($http,$q){
 return{

	getdata:function(){
		var deffered=$q.defer();
		$http.get("http://192.168.3.21:8082/Ticket/rest/tickets").success(function(response){
		deffered.resolve(response);

		})
		.error(function(err){
			deffered.reject(err);
		})

		return deffered.promise;
	},
	postdata:function(data,$scope){
		var deffered=$q.defer();
		$http.post("http://192.168.3.21:8082/Ticket/rest/tickets/create",data).success(function(response){

		console.log(response);
		deffered.resolve(response);
			
		})
		.error(function(err){
			deffered.reject(err);
		})
		return deffered.promise;
	},

	editdata:function(id){
		var deffered=$q.defer();
		$http.get("http://192.168.3.21:8082/Ticket/rest/tickets/" +id).success(function(response){

			deffered.resolve(response);
		})
		.error(function(err){
			deffered.reject(err);
		})
		return deffered.promise;
	},
		updatedata:function(id,data){
		var deffered=$q.defer();
		$http.put("http://192.168.3.21:8082/Ticket/rest/tickets/" +id,data).success(function(response){

			deffered.resolve(response);
		})
		.error(function(err){
			deffered.reject(err);
		})
		return deffered.promise;
	},
	deleteticket:function(id){
		var deffered=$q.defer();
		
		$http.delete("http://192.168.3.21:8082/Ticket/rest/tickets/" +id).success(function(response){

			deffered.resolve(response);
		})
		.error(function(err){
			deffered.reject(err);
		})
		return deffered.promise;
	}

}
})

