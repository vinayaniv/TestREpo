/**
 * 
 */
add.controller("myForm", function($scope,saveService){
	
	$scope.save = function(){
		saveService.saveObj($scope.fn,$scope.sn,$scope.age,$scope.id);
	};
	
	$scope.clear = function(){
		saveService.clear();
	};
});

