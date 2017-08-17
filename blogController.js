app.controller("blogController",['$scope','$http', function blogCotroller($scope,$http) {
	
   $http({
	   method: 'Get',
	   url : 'blog.json'
   }).then (function Success(response) {
	      $scope.records = response.data;
   }, function Error(response) {
     $scope.records = response.statusText;
 });
       
    
}]);
