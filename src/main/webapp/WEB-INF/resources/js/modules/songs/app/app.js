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
	routeProviderConfig.$inject = ['$routeProvider', '$locationProvider', 'urlStringServiceProvider'];
	function routeProviderConfig($routeProvider, $locationProvider, urlStringService){
	
		$routeProvider.when('/', {
			templateUrl: urlStringService.$get().getUrl('rootLocation_partial'),
			controller:'MyController'
		})
		.otherwise({
			redirectTo:'/'
		});
		
		$locationProvider.html5Mode(true);
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
