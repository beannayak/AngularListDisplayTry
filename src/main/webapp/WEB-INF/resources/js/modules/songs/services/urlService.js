/**
 * 
 */
(function(){
	'use strict';
	
	angular.module('myApp')
	.factory('urlService', urlService);
	
	urlService.$inject = ['$http', 'urlStringService'];
	
	function urlService($http, urlStringService){
		var retObject = {};
		
		retObject.getData = function() {
			return $http.get(urlStringService.getUrl('serviceUrl'));
		};
		
		return retObject;
		
		
	}
})();