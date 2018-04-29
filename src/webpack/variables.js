const path = require('path');

exports.publicPath = '';
exports.srcDirectory = path.join(__dirname, '..', 'app');

const distDirectory = path.join(
  process.cwd(),
  process.env.BUILD_PATH || './dist',
);

exports.clientDistDirectory = distDirectory;

exports.excludedPatterns = [/node_modules/];
