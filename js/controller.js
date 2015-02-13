var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {

	$scope.resumes = [ {
		'name' : "Jamie Pilgrim",
		'title' : "Web Developer"
	},
	{
		'name' : "Pilgrim Jamie",
		'title' : "Web Designer"
	}]
})


// Use something like this to get from a json file: 

// var myApp = angular.module('myApp', []);

// myApp.controller('MyController', ['$scope', '$http', function MyController($scope) {
// 	$http.get('js/data.json').success(function(data) {
// 		$scope.resumes = data;
// 	});
// }]);