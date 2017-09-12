app.factory('myService',['$http', function myServiceFactory($http){
    	
    	return {
    		getData: function(url){
    			return $http({
    						method: 'Get',
			    		   url : url
			    	})
    		}
    	}
    
}]);
