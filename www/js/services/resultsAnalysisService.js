'use strict';


angular.module('starter').service('resultAnalysisService', [function() {

    var self = this;
    this.analyse = function(references, data) {

        //console.log(references);

        _.each(data, function(row, key) {
            if(references[key]){
                self.compare(row, references[key]);
            }
        });

    };

    this.compare = function (data, comparator){
        console.log( data, comparator );
    };

}]);