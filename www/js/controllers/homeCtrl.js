'use strict';

angular.module('starter').controller('homeCtrl', ['$scope', '$firebaseObject', 'dataReferenceManagementService', 'resultAnalysisService', '$http', function($scope, $firebaseObject, dataReferenceManagementService, analysisService, $http) {

	$firebaseObject(dataReferenceManagementService.getReference());

	$scope.dataReference = [];

	dataReferenceManagementService.getReference().on('child_added', function(snapshot) {
		$scope.dataReference.push(snapshot.val());
	});

	dataReferenceManagementService.getReference().on('child_removed', function(snapshot) {
		$scope.dataReference.splice($scope.dataReference.indexOf(snapshot), 1);
	});

	$http.get('./json/cardHolder.json').then(function(cards){
		$scope.cards = cards.data;
	});

	$http.get('./json/references.json').then(function(references) {
		$http.get('./json/fakeData.json').then(function(data) {
			$scope.results = analysisService.analyse(references.data, data.data[0]);
		});
	});


}]);
