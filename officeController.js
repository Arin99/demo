app.controller('officeController',['$scope','$http','$routeParams',function officeController ($scope,$http,$routeParams){
	var scope = $scope;
	scope.id = $routeParams.id;
	scope.messages = [] ;
	  $http({
		   method: 'Get',
		   url : 'office.json'
	   }).then (function Success(response) {
		   console.log(JSON.stringify(response));
		      scope.messages = response.data;
		      $scope.errormessages = response.statusText;
		      scope.messages.forEach(function(item){
		  		if (item.id == scope.id){
		  			scope.message = item;
		  		}
		  		//console.log(item.id);
		  	})
		  	
	   }, function Error(response) {
	     $scope.errormessages = response.statusText;
	 });
	       
	
	
	//console.log(scope.id);
	
}]);

