'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.sitemaps = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default/sitemap.xml');
    var expected = grunt.file.read('test/expected/default-sitemap.xml');
    test.equal(actual, expected, 'Comparison of result sitemap failed.');

    test.done();
  },
  custom: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom/sitemap.xml');
    var expected = grunt.file.read('test/expected/custom-sitemap.xml');
    test.equal(actual, expected, 'Comparison of result sitemap failed.');

    test.done();
  }
};
