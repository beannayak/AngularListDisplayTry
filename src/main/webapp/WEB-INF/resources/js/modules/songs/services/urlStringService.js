/**
 * 
 */
(function(){
	'use strict';
	
	angular.module('myApp')
	.provider('urlStringService', function (){
		var retObject = {};
		
		var contextLocation = getContextUrl();
		var urlMap = {
				'serviceUrl': '/rest/message',
				'songInfoTemplateUrl': '/resources/template/SongInfoTemplate.html',
				'albumArtLocation': '/resources/images/[arg].jpg',
				'rootPartialLocation': '/resources/partials/rootPartial.html'
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
		
		this.$get = function() {
			return retObject;
		}
	})
})();