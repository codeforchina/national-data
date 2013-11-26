var sdk = require('sdk'),
    configs = {
        server: 'http://data.stats.gov.cn'
    };

exports.regoin = new sdk({
    list: {
        url: '/region/init?dbcode={{dbcode}}&dimension={{dimension}}'
    }
},configs);

exports.index = new sdk({
    list: {
        url: '/quotas/init?dbcode={{dbcode}}'
    },
    children: {
        method: 'POST',
        url: '/quotas/getchildren'
    }
},configs);

exports.data = new sdk({
    fetch: {
        url: '/workspace/index?a={{action}}&m={{dbcode}}&index={{ids}}&region=000000&time={{sort.time}}&selectId={{select}}&third={{third}}'
    }
},configs);