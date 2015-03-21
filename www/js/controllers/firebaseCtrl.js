'use strict';

angular.module('starter').controller('firebaseCtrl', ['$scope', '$firebaseObject', 'dataReferenceManagementService', function($scope, $firebaseObject, dataReferenceManagementService) {

  $firebaseObject(dataReferenceManagementService.getReference());

  $scope.addData = function() {
    dataReferenceManagementService.pushDataSet({
      'timestamp': Date.now(),
      'data':
        {
          'leucocytes': {
            'type': 'qualitative',
            'values': [
                'traces', 'faible','modere','eleve',
            ],
            'reaction': 42,
            'remarks': ''
          },
          'nitrites': {
            'type': 'qualitative',
            'values': [
                'negative', 'positive'
            ],
            'reaction': 60,
            'remarks': ''
          },
          'urobilinogene': {
            'type': 'quantitative',
            'valuesRange': [0.1, 8],
            'unit': 'mg/dL',
            'reaction': 60,
            'remarks': ''
          },
          'proteins': {
            'type': 'quantitative',
            'valuesRange': [1, 3000],
            'unit': 'mg/dL',
            'reaction': 60,
            'remarks': ''
          },
          'ph': {
            'type': 'quantitative',
            'valuesRange': [5, 8.5],
            'reaction': 60,
            'remarks': ''
          },
          'blood': {
            'type': 'qualitative',
            'values': [
                'traces', 'faible','modere','eleve',
            ],
            'reaction': 60,
            'remarks': ''
          },
          'density': {
            'type': 'qualitative',
            'valuesRange': [1, 1.030],
            'reaction': 40,
            'remarks': ''
          },
          'ketoneBodies': {
            'type': 'quantitative',
            'valuesRange': [ 0 , 160],
            'unit': 'mg/dL',
            'reaction': 40,
            'remarks': ''
          },
          'bilirubine': {
            'type': 'qualitative',
            'values': [
                'traces', 'faible','modere','eleve',
            ],
            'reaction': 30,
            'remarks': ''
          },
          'glucose': {
            'type': 'quantitative',
            'valuesRange': [ 1 , 2000],
            'unit': 'mg/dL',
            'reaction': 30,
            'remarks': ''
          },
         'hcg': {
           'type': 'qualitative',
            'values': [
                'traces', 'faible','modere','eleve',
            ],
            'reaction': 30,
            'remarks': ''
          },
        }
    });
  };

  $scope.remove = function(id) {
    dataReferenceManagementService.removeById(id);
  };

  $scope.removeAll = function() {
    dataReferenceManagementService.removeAllData();
  };

  $scope.dataReference = [];

  dataReferenceManagementService.getReference().on('child_added', function(snapshot, cn) {
    $scope.dataReference.push(snapshot);
  });

  dataReferenceManagementService.getReference().on('child_removed', function(snapshot) {
    $scope.dataReference.every(function(elem, ind) {
      if (elem.key() == snapshot.key()) {
        $scope.dataReference.splice(ind, 1);
        return false;
      }
      return true;
    });
    //$scope.dataReference.splice($scope.dataReference.indexOf(snapshot), 1);
  });

}]);
