var sdk = require('../index');

sdk.indexs.root({}, function(err, r){
    console.log(r);
});