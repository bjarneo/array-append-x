'use strict';

var chunk = require('lodash.chunk');
var isArray = require('lodash.isarray');
var arraySpread = require('array-spread');

module.exports = function(arr, element, pos) {
    // pos % 1 === 0 checks for a whole number
    if (!isArray(arr) || (!element && element !== false) || (pos % 1 !== 0)) {
        return [];
    }

    pos--;

    // Split into chunks
    arr = chunk(arr, pos);

    // Append element to each chunk
    var len = arr.length;
    while (len--) {
        if (arr[len].length === pos) {
            arr[len].push(element);
        }
    }

    // Flatten our array
    return arraySpread(arr);
};
