'use strict';

angular.module('starter').controller('homeCtrl', ['$scope', '$firebaseObject', 'dataReferenceManagementService', function($scope, $firebaseObject, dataReferenceManagementService) {

  $firebaseObject(dataReferenceManagementService.getReference());

  $scope.dataReference = [];

  dataReferenceManagementService.getReference().on('child_added', function(snapshot) {
    $scope.dataReference.push(snapshot.val());
  });

  dataReferenceManagementService.getReference().on('child_removed', function(snapshot) {
    $scope.dataReference.splice($scope.dataReference.indexOf(snapshot), 1);
  });

}]);
