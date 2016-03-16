'use strict'

const example = require('../src/example')

var assert = require('assert');
describe('example()', function() {
  it('should return a string "wow"', function () {
    assert.equal(example(), 'wow');
  })
})
