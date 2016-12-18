/**
 * 
 */
(function(){
	'user strict';
	
	angular.module('myApp')
	.factory('urlService', urlService);
	
	urlService.$inject = ['$http'];
	
	function urlService($http){
		var retObject = {};
		
		retObject.getData = function() {
			return $http.get(urlStringService.getUrl('serviceUrl'));
		};
		
		return retObject;
		
		
	}
	
	function urlStringService(){
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
	}
})();