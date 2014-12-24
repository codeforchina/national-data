exports.host = 'http://data.stats.gov.cn';

exports.rules = {
  all: {
    headers: {
      
    }
  }
}

exports.routes = {
  fetchData: {
    url: '/workspace/index?' + [
      'a={{action}}',
      'm={{dbcode}}',
      'index={{ids}}'
      'region=000000',
      'time={{time}}',
      'selectId={{selectId}}'
      'third={{third}}'
    ].join('&')
  },
  indexes: {
    url: '/quotas/init?dbcode={{dbcode}}'
  },
  indexChildren: {
    method: 'POST',
    url: '/quotas/getchildren'
  },
  regoin: {
    url: '/region/init?dbcode={{dbcode}}&dimension={{dimension}}'
  }
}
