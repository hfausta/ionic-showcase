// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionic_showcase', ['ionic', 
	'ionic_showcase.controllers', 'ionic_showcase.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	
		.state('showcase', {
			url: '/showcase',
			abstract: true,
			templateUrl: 'templates/menu.html'
		})
		
		.state('showcase.blank', {
			url: '/blank',
			views: {
				'showcase-main' : {
					templateUrl: 'templates/blank.html'
				}
			}
		})
		
		.state('showcase.tab', {
			url: '/tabs',
			views: {
				'showcase-main' : {
					templateUrl: 'templates/tabs.html'
				}
			}
		})
		
		.state('showcase.list', {
			url: '/list',
			views: {
				'showcase-main' : {
					templateUrl: 'templates/list.html',
					controller: 'ListController'
				}
			}
		})
		
		.state('showcase.details', {
			url: '/list/:itemId',
			views: {
				'showcase-main' : {
					templateUrl: 'templates/listDetails.html',
					controller: 'ListDetailsController'
				}
			}
		})
		
		.state('showcase.form', {
			url: '/form',
			views: {
				'showcase-main' : {
					templateUrl: 'templates/form.html',
					controller: 'FormController'
				}
			}
		})
		
		.state('showcase.scanner', {
			url: '/scanner',
			views: {
				'showcase-main' : {
					templateUrl: 'templates/scanner.html',
					controller: 'ScannerController'
				}
			}
		})
		
		$urlRouterProvider.otherwise('/showcase/blank');
});
