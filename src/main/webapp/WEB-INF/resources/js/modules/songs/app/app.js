/**
 * 
 */
(function(){
	'use strict';	

	angular.module('myApp',['ngRoute'])
	.config([
		'$routeProvider',
		function($routeProvider){
		
//		RestangularProvider.setBaseUrl(getContextUrl());
		$routeProvider.when('/',{
			templateUrl: getContextUrl() + '/resources/template/SongInfoTemplate.html',
			controller:'MyController'
		})
		.otherwise({
			redirectTo:'/'
		});
	}
		])
		.config([
			'$httpProvider',
			function($httpProvider){
				$httpProvider.defaults.withCredentials = true;
				$httpProvider.defaults.headers.common = {
						'myApp' : true,
						'content-type': 'application/json'
				};
				$httpProvider.defaults.cache = false;
			}
		])
	
})();
