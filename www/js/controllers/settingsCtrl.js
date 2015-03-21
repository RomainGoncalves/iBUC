'use strict';

angular.module('starter').controller('settingsCtrl', ['$scope', '$http', 'resultAnalysisService', function($scope, $http, analysisService){

    $http.get('./json/references.json').then(function(references){
        $http.get('./json/fakeData.json').then(function(data){
            analysisService.analyse( references.data, data.data );
        });
    });
}]);