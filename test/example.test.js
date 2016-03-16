'use strict'

const example = require('../src/example')

var assert = require('assert');
describe('example()', function() {
  it('should return a string "russell rules"', function () {
    assert.equal(example(), 'russell rules');
  })
})
