'use strict';

angular.module('starter').controller('settingsCtrl', ['$scope', '$http', 'resultAnalysisService', function($scope, $http, analysisService){

    $http.get('./json/references.json').then(function(references){
        $http.get('./json/fakeData.json').then(function(data){
            _.each(data.data, function(row){
                analysisService.analyse( references.data, row );
            });
        });
    });
}]);