var SDK = require('sdk');
var apis = require('./apis');

module.exports = new SDK(apis.host, apis.routes, apis.rules);
