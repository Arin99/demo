app.controller('officeController',['$scope','$http','$routeParams',function officeController ($scope,$http,$routeParams){
	
	var scope = this;
	scope.id = $routeParams.id;
	scope.messages = [] ;
	scope.message = "";
	
	  $http({
		   method: 'Get',
		   url : 'office.json'
	   }).then (function Success(response) {		   
		      scope.messages = response.data;
		      scope.messages.forEach(function(item){
		  		if (item.id == scope.id){
		  			scope.message = item;
		  		}
		  		
		  	})
		  	
	   }, function Error(response) {
	     scope.errormessages = response.statusText;
	 });
	       

	
}]);

