/**
 * 
 */
/*
app.controller("myController", function($scope) {
	
	 $scope.submit = function(){
	 return $scope.c = parseInt($scope.a) + parseInt($scope.b);
	}
});*/


app.controller("myController", function($scope,add) {
	
	 $scope.submit = function(){
		 $scope.c = add.getAdd($scope.a,$scope.b);
	 }
});