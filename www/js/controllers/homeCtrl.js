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


	$http.get('./json/references.json').then(function(references) {
		$http.get('./json/fakeData.json').then(function(data) {
			$scope.results = analysisService.analyse(references.data, data.data[0]);
		});
	});

	$scope.symptoms = {
		glucose: {
			icon: '../img/spermatozoide.png',
			header: "Ovulation",
			title: "Conception : J-3",
			subTitle: "Le conseil du médecin",
			text: "C'est dans 3 jours que vos chances de tomber enceinte seront les plus grandes. Amusez-vous bien !"
		},
		ketone: {
			icon: '../img/spermatozoide.png',
			header: "Ovulation",
			title: "Conception : J-3",
			subTitle: "Le conseil du médecin",
			text: "C'est dans 3 jours que vos chances de tomber enceinte seront les plus grandes. Amusez-vous bien !"
		},
		LH: {
			icon: '../img/spermatozoide.png',
			header: "Ovulation",
			title: "Conception : J-3",
			subTitle: "Le conseil du médecin",
			text: "C'est dans 3 jours que vos chances de tomber enceinte seront les plus grandes. Amusez-vous bien !"
		}
	};

}]);
