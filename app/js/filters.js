'use strict';

/* Filters */

angular.module('myApp.filters', [])
  /*
  .filter('unique', function() {
  	return function(input, key) {
  		var unique = {};
  		var uniqueList = [];
  		for (var i=0; i < input.length; i++) {
  			if (typeof unique[input[i][key]] == 'undefined') {
  				unique[input[i][key]] = '';
  				uniqueList.push(input[i]);
  			}
  		}
  		return uniqueList;
  	}
  })
  */
  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
