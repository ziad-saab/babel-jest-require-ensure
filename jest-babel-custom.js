// Code by @sawyerh

var babelJest = require('babel-jest');

module.exports = {
  process: function(src, filename) {
    var processed = babelJest.process(src, filename)
        .replace(/require\(\s*'[a-zA-Z0-9\/\._\-!]*\.(css|scss|less)'\);/gm, '');

    if (processed.match(/require\.ensure\(/) && !processed.match(/require\.ensure =/))
      processed += 'if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };';

    return processed;
  }
};
