'use strict';

angular.module('starter').controller('homeCtrl', ['$scope', '$firebaseObject', 'dataReferenceManagementService', 'resultAnalysisService', '$http', '$state', function($scope, $firebaseObject, dataReferenceManagementService, analysisService, $http, $state) {

	$firebaseObject(dataReferenceManagementService.getReference());

	$scope.dataReference = [];
	$scope.results = [];

	dataReferenceManagementService.getReference().on('child_added', function(snapshot) {
		$scope.dataReference.unshift(snapshot);
		$http.get('./json/references.json').then(function(references) {
			$scope.results = [];
			$scope.results.unshift(analysisService.analyse(references.data, snapshot.val()));

			$scope.results = _.uniq(_.flatten($scope.results));

			console.log($scope.results);

		});
	});

	dataReferenceManagementService.getReference().on('child_removed', function(snapshot) {
		$scope.dataReference.every(function(elem, ind) {
			//console.log($scope.dataReference);
			//console.log(elem);
			if (elem.key() == snapshot.key()) {
				$scope.dataReference.splice(ind, 1);
				$scope.results.splice(ind, 1);
				return false;
			}
			return true;
		});
	});

	$http.get('./json/cardHolder.json').then(function(cards){
		$scope.cards = cards.data;
	});

	$scope.goTo = function(route){
		$state.go(route);
	};

}]);
