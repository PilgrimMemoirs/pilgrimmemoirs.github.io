var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {

	$scope.resume = {
		'name' : "Jamie Pilgrim",
		'title' : "Web Developer & Designer",
		'skills' : ["html", "css", "ruby", "rails", "JavaScript"]
	}
})