/**
 * 
 */
app.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl : "pages/main.html"
		})
		.when("/calc", {
			templateUrl : "pages/calc.html",
			controller : "myController"
		})
		.otherwise({
			templateUrl : "pages/registrationForm.html"
		});
});