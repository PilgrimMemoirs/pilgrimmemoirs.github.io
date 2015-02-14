var resumeControllers = angular.module('resumeControllers', []);

resumeControllers.controller('ListController', function MyController($scope) {

	$scope.resumes = [ {
		'name' : "Jamie Pilgrim",
		'title' : "Web Developer"
	},
	{
		'name' : "Pilgrim Jamie",
		'title' : "Web Designer"
	},
		{
		'name' : "John Doe",
		'title' : "Master Chef"
	},
		{
		'name' : "Prince",
		'title' : "Singer"
	},
		{
		'name' : "Pluto",
		'title' : "Star"
	}];
	$scope.resumeOrder ='name';
});


resumeControllers.controller('DetailsController', ['$scope', '$http', function MyController($scope) {
	$scope.resumes = [ {
		'name' : "Jamie Pilgrim",
		'title' : "Web Developer"
	},
	{
		'name' : "Pilgrim Jamie",
		'title' : "Web Designer"
	},
		{
		'name' : "John Doe",
		'title' : "Master Chef"
	},
		{
		'name' : "Prince",
		'title' : "Singer"
	},
		{
		'name' : "Pluto",
		'title' : "Star"
	}];
	$scope.person = $routeParams.itemId;

	if ($routeParams.itemId > 0) {
		$scope.prevItem = Number($routeParams.itemId)-1;
	} else {
		$scope.prevItem = $scope.resumes.length-1;
	}
	
	if ($routeParams.itemId < $scope.resumes.length-1) {
		$scope.prevItem = Number($routeParams.itemId)+1;
	} else {
		$scope.prevItem = 0;
	}

}]);
// Use something like this to get from a json file: 

// var myApp = angular.module('myApp', []);

// myApp.controller('MyController', ['$scope', '$http', function MyController($scope) {
// 	$http.get('js/data.json').success(function(data) {
// 		$scope.resumes = data;
// 	});
// }]);