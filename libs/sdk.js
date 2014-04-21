var sdk = require('sdk');
var server = 'http://data.stats.gov.cn';

exports.regoin = new sdk(server, {
  list: {
    url: '/region/init?dbcode={{dbcode}}&dimension={{dimension}}'
  }
});

exports.index = new sdk(server, {
  list: {
    url: '/quotas/init?dbcode={{dbcode}}'
  },
  children: {
    method: 'POST',
    url: '/quotas/getchildren'
  }
});

exports.data = new sdk(server, {
  fetch: {
    url: '/workspace/index?a={{action}}&m={{dbcode}}&index={{ids}}&region=000000&time={{sort.time}}&selectId={{select}}&third={{third}}'
  }
});