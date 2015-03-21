'use strict';

angular.module('starter').controller('firebaseCtrl', ['$scope', '$firebaseObject', '$http', 'dataReferenceManagementService', function($scope, $firebaseObject, $http, dataReferenceManagementService) {

  $firebaseObject(dataReferenceManagementService.getReference());

  $scope.fakeCases = [];
  $http.get('./json/fakeData.json').success(function (res) {
    $scope.fakeCases = res;
  });

  $scope.addData = function(ind) {
    dataReferenceManagementService.pushDataSet(angular.copy($scope.fakeCases[ind]));
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
