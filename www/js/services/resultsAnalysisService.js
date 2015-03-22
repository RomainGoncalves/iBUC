'use strict';

angular.module('starter').service('resultAnalysisService', [function() {

	var self = this;
	this.analyse = function(references, data) {

		var results = [];

		_.each(data, function(row, key) {
			if(key == "glucose"){
				if(row > 0){
					results.push(key + "Positive");
				}else{
					results.push(key + "Negative");
				}
			}else{
				//if(key == 'HCG'){
				//	(self.compare(references[key], row)) ? results.push(key + "Positive") : results.push(key + "Negative");
				//}else{
					console.log(key);
					console.log(row);
					if(!_.isUndefined(references[key])){
						if(self.compare(row, references[key])){
							console.log( "Dtc" );
							results.push(key + "Positive");
						}else{
							console.log( key );
							if(key != "LH" && key != 'HCG'){
								results.push(key + "Negative");
							}
						}
					//}
				}
			}

		});

		return results;
	};

	this.compare = function(data, comparator) {
		console.log(data, ">", comparator);
		if(comparator < data){
			return true;
		}
	};

}]);