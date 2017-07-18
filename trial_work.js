var async = require('async');

async.waterfall([
    function(callback){
        console.log("This is test");
      
    },
  ],function(err){
  console.log("DONE");
});
