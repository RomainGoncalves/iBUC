'use strict';


angular.module('starter').service('dataReferenceManagementService', [function() {

  var dataReferenceBase = new Firebase("'https'://ipipi.firebaseio.com/data-reference");

  this.pushDataSet = function(set) {
    dataReferenceBase.remove();
    dataReferenceBase.push(set);
  };

  this.removeAllData = function() {
    dataReferenceBase.remove();
  };

  this.removeById = function(id) {
    dataReferenceBase.on('value', function(snapshot) {
      var childToRemove = snapshot.child(id);

      if (childToRemove != null) {
        childToRemove.ref().set(null);
      }
    });
  };

  this.getReference = function() {
    return dataReferenceBase;
  };

}]);
