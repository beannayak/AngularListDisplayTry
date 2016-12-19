/**
 * 
 */
(function(){
	'use strict';	

	angular.module('myApp',['ngRoute'])
	.config(routeProviderConfig)
	.config(httpProviderConfig);
	
	//urlStringServiceProvider: 'Provider' suffix is added by angular
	//the suffix is only needed for .config, everything else can just use
	//urlStringService. Note how .$get() is used while acting as provider 
	//Check file services/urlStringService for the service
	routeProviderConfig.$inject = ['$routeProvider', 'urlStringServiceProvider'];
	function routeProviderConfig($routeProvider, urlStringService){
	
		$routeProvider.when('/', {
			templateUrl: urlStringService.$get().getUrl('rootPartialLocation'),
			controller:'MyController'
		})
		.otherwise({
			redirectTo:'/'
		});
	};
		
	httpProviderConfig.$inject = ['$httpProvider'];
	function httpProviderConfig($httpProvider){
		$httpProvider.defaults.withCredentials = true;
		$httpProvider.defaults.headers.common = {
				'myApp' : true,
				'content-type': 'application/json'
		};
		$httpProvider.defaults.cache = false;
	};
})();
