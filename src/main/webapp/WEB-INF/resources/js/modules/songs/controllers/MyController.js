/**
 * 
 */
(function(){
	'use strict';
	
	angular.module('myApp')
	.controller('MyController', MyController);
	
	MyController.$inject = ['$scope', 'urlService'];
	function MyController($scope, urlService){
		$scope.hello = "Hello";
		$scope.world = "World!";
		
		var ourDataHandler = function (httpResponse) {
			$scope.songsData = httpResponse.data;
		};
		urlService.getData().then(ourDataHandler);
	}
})();