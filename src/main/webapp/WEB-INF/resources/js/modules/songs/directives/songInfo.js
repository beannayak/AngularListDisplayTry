/**
 * 
 */
(function(){
	'use strict';
	
	angular.module('myApp')
	.directive('songInfo', songInfo);
	
	songInfo.$inject = ['urlStringService'];
	
	function songInfo(urlStringService) {
		var returnObject = {};
		
		returnObject.restrict = 'AE';
		returnObject.templateUrl = urlStringService.getUrl('songInfoTemplateUrl');
		returnObject.scope = {song: "="};
		returnObject.link = function (scope, elem, attr) {
			scope.getImagePath = function(albumArt) {
				return urlStringService.getUrl('albumArtLocation', albumArt);
			};
		};
		return returnObject;
	}
})();