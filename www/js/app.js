// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase', 'ngCordova'])

	.run(function($ionicPlatform, $cordovaSplashscreen) {
		//$cordovaSplashscreen.show();
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard){
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if(window.StatusBar){
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}

			//$cordovaSplashscreen.hide();

		});
	})

	.config(function($stateProvider, $urlRouterProvider) {

		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider

			// setup an abstract state for the tabs directive
			.state('home', {
				url: "/home",
				templateUrl: "templates/home.html",
				controller: "homeCtrl"
			}).
			state('settings', {
				url: "/settings",
				templateUrl: "templates/settings.html",
				controller: "settingsCtrl"
			}).
			state('profile', {
				url: "/profile",
				templateUrl: "templates/profile.html"
			}).
			state('firebase', {
				url: "/firebase",
				templateUrl: "templates/firebase.html",
				controller: "firebaseCtrl"
			}).
			state('consigns', {
				url: '/consigns',
				templateUrl: 'templates/consigns.html',
				controller: ['$state', '$scope', function($state, $scope) {
					$scope.toHome = function() {
						$state.go('home');
					};
				}]
			})
			.state('ovulation', {
				url: "/ovulation",
				templateUrl: "templates/ovulation.html",
				controller: function(){
				}
			})
			.state('questions', {
				url: "/questions",
				templateUrl: "templates/questions.html",
				controller: ['$scope', '$state', function($scope, $state){
					$scope.symptom = {
						"icon": "./img/questions.png",
						"header": "Questions",
						"title": "Une petite précision...",
						"paragraph": "Avez-vous envie d’uriner plus souvent ? Uriner vous brûle t-il ?",
						"text": "<button>OUi</button>"
					};

					$scope.goTo = function(route){
						$state.go(route);
					};
				}]
			});

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/consigns');

	});
