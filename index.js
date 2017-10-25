// Code by @sawyerh

const babelJest = require('babel-jest');

const createTransformer = options => {
  const preprocessor = babelJest.createTransformer(options);
  const process = preprocessor.process;

  function processWrapper() {
    const args = [].slice.call(arguments);
    const processed = process.apply(null, args);

    if (processed.match(/require\.ensure\(/) && !processed.match(/require\.ensure =/))
      processed += 'if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };';

    return processed;
  }

  preprocessor.process = processWrapper;
  return preprocessor;
}

module.exports = createTransformer();
module.exports.createTransformer = createTransformer;
