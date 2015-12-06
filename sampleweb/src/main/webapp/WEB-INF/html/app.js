var app = angular.module('myApp');
    
 app.controller('myController', ['$scope', '$http', function($scope, $http)
  {
       console.log($scope);
       console.log($http);
      
       $scope.output = 'none';
       $scope.getData = function ()
       {
            $http.get('http://jsonplaceholder.typicode.com/posts')
            .success(
            function(res)
             {
                  
                  $scope.output = res.data;     
              });
        
       };
    
    }]);   
