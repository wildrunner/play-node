var crontab = require('node-crontab');
var exec = require('child_process').exec;
var async = require('async');

var CronJob = require('cron').CronJob;

var job = new CronJob('* * * * * *', function() {
    exec('node --version', function(error, stdout, stderr) {
        console.log('node version:' + stdout);
        //console.log('stderr:' + stderr);
        if (error != null) {
            console.log('exec error:' + error);
        }
    })
}, null, true);

var job2 = new CronJob('* * * * * *', function() {
    exec('java -version', function(error, stdout, stderr) {
        //console.log('java version:' + stdout);
        console.log('java version:' + stderr);
        if (error != null) {
            console.log('exec error:' + error);
        }
    })
}, null, true);





/*async.waterfall([
    function(callback) {

    }
], function(err, result) {

});*/

