'use strict';

angular.module('starter').directive('displaySymptom', [function() {
	return {
		restrict: 'EA',
		scope: {
			symptom: "@",
			display: '@'
		},
		templateUrl: 'templates/displaySymptoms.html',
		link: function(scope) {

			scope.$watch('symptom', function(val){
				if(typeof val === "string"){
					scope.symptom = JSON.parse(val);
				}
			});

			scope.$watch('display', function(val){
				if(typeof val === "string"){
					scope.symptom.display = val;
				}
			});
		}
	};
}])
;
