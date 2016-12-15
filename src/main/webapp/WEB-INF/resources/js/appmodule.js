var myApp = angular.module("myApp", []);
myApp.factory ('urlService', ['$http', function($http) {
	var retObject = {};
	
	retObject.getData = function() {
		return $http.get(getContextUrl() + "/rest/message");
	};
	
	return retObject;
}]);

myApp.controller ("MyController", ['$scope', 'urlService', function ($scope, urlService) {
	$scope.hello = "Hello";
	$scope.world = "World!";
	
	var ourDataHandler = function (httpResponse) {
		$scope.songsData = httpResponse.data;
		console.log($scope.songsData);
	};
	urlService.getData().then(ourDataHandler);
}]);

myApp.directive('songInfo', function() {
	var returnObject = {};
	
	returnObject.restrict = 'AE';
	returnObject.template = '<button>{{song.songName}}</button>';
	returnObject.scope = {song: "="};
	
	return returnObject;
});

myApp.directive('datePicker', function() {
	var returnObject = {};
	
	returnObject.restrict = 'AE';
	returnObject.template = '<input type="text"></input>';
	returnObject.link = function (scope, elem, attrs) {
		jQuery(elem.find('input')).datepicker();
	};
	
	return returnObject;
});