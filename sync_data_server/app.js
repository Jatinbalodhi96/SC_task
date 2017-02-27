var http = require('http');
var fs = require('fs');
var url = require('url');
var readline = require('readline');
var date = new Date();

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout	
});

http.createServer(function(request, response){
	if (request.url == "/save") {
		request.on('data', function(data){
			console.log(data.toString());
			fs.appendFile('synced_data.txt', data.toString()+ '\n');
		});
	};
}).listen(5000);

console.log("running on port 5000");
fs.readFile('name.txt', function(err, data){
	if (err) { throw err};
	console.log(data.toString());
});