'use strict';

var assert = require('assert');
var arrayAppendX = require('./array-append-x');

describe('array append x', function() {
    it('it should append element to every x element in array', function() {
        var num = [0, 0, 0, 0, 0, 0, 0];

        assert.deepEqual(arrayAppendX(num, 1, 4), [0, 0, 0, 1, 0, 0, 0, 1, 0]);
    });

    it('it should return an empty array if any of the parameters fail', function() {
        assert.deepEqual(arrayAppendX({}, 1, 4), []);
        assert.deepEqual(arrayAppendX([], undefined, 4), []);
        assert.deepEqual(arrayAppendX([], 1, '4'), []);
        assert.deepEqual(arrayAppendX([], 1, {}), []);
    });
});
