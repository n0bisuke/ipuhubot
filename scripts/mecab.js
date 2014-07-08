// Description:
//   Mecab Test
//

var mecab = require('mecab-async');
var request = require('request');
var printf = require('printf');

module.exports = function(robot) {
  robot.hear(/(.*)/i, function(msg) {
    if (msg.envelope.room == 'ipukun_school') {
      request.get('http://sasarky.net:8888/talk', function(err, res, body) {
        msg.reply(body);
      });
    }
  });
}