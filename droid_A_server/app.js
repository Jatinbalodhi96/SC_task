var http = require('http');
var fs = require('fs');
var url = require('url');
var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout	
});

fs.readFile('droid_A_face.txt', function(err, data){
	if (err) { throw err};
	console.log(data.toString());
});

var options = {
  hostname: 'localhost',
  port: 5000,
  path: '/save',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

var req = http.request(options, (res) => {

});
rl.on('line', function(cmd){
	req.write('Droid A :' + cmd);
});