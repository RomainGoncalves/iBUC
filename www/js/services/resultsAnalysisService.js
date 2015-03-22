'use strict';

angular.module('starter').service('resultAnalysisService', [function() {

	var self = this;
	this.analyse = function(references, data) {

		var results = [];

		_.each(data, function(row, key) {
			if(references[key]){
				if(self.compare(row, references[key])){
					results.push(key);
				}
			}
		});

		return results;
	};

	this.compare = function(data, comparator) {
		//console.log(data, ">", comparator);
		if(comparator < data){
			return true;
		}
	};

}]);