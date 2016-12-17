var myApp = angular.module("myApp", []);

myApp.factory ('urlStringService', function() {
	var retObject = {};
	
	var contextLocation = getContextUrl();
	var urlMap = {
			'serviceUrl': '/rest/message',
			'songInfoTemplateUrl': '/resources/template/SongInfoTemplate.html',
			'albumArtLocation': '/resources/images/[arg].jpg' 
		};
	retObject.getUrl = function() {
		var stringToReturn = urlMap[arguments[0]];
		
		var index=1;
		while (stringToReturn.indexOf('[arg]') !== -1) {
			stringToReturn = stringToReturn.replace('[arg]', arguments[index]);
			index++;
		};
		return contextLocation + stringToReturn;
	};
	
	return retObject;
});

myApp.factory ('urlService', ['urlStringService', '$http', function(urlStringService, $http) {
	var retObject = {};
	
	retObject.getData = function() {
		return $http.get(urlStringService.getUrl('serviceUrl'));
	};
	
	return retObject;
}]);

myApp.directive('songInfo', ['urlStringService', function(urlStringService) {
	var returnObject = {};
	
	returnObject.restrict = 'AE';
	returnObject.templateUrl = urlStringService.getUrl('songInfoTemplateUrl');
	returnObject.scope = {song: "="};
	returnObject.link = function (scope, elem, attr) {
		scope.getImagePath = function(albumArt) {
			return urlStringService.getUrl('albumArtLocation', albumArt);
		};
		console.log (scope);
	};
	return returnObject;
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