/* Author: Daniel Teichman <danielteichman@gmail.com>
 * License: GNU GPL v3 <http://www.gnu.org/licenses/gpl-3.0.html>
 * Module: Server for Node.js VBox interface */

var fs = require('fs');
var cp = require('child_process');

function include(file_) {
    with (global) {
        eval(fs.readFileSync(file_) + '');
    };
};

include("settings.js");

var http = require('http');
favicon = fs.readFileSync(favicon);
defaultResponse = fs.readFileSync(defaultResponse);

global.command_server = function (request, response) {
	var connection = request.connection; //net.Socket object
	var url = request.url;

	console.log(connection.remoteAddress+' -- '+url);

	/* DON'T NEED HEADERS AT THIS TIME
	for(header in request.headers) {
		console.log(header+': '+request.headers[header]);
	}
	*/

	if(url == '/') {
		response.writeHead(200, {'Content-Type' : 'text/plain'});
		response.end(defaultResponse);
		console.log('Default output');
		return;
	}
	if(url.substr(-12,12) == '/favicon.ico') {
		response.writeHead(200, {'Content-Type' : 'image/x-icon'});
		response.end(favicon);
		console.log('Favicon output');
		return;
	}

	//hand-off sequence to actual API processing script

	//split URL into ordered array
	// "/list/vms/" becomes ['list','vms']
	url = url.split('/');
	if(url[0] == "") url.shift();
	if(url[url.length-1] == "") url.pop();

		function api_handle_callback(code, stdout, stderr) {
			response.writeHead(200, {'Content-Type' : 'text/plain'});
			response.end(stdout);
		}

	cp.execFile(vboxmanagepath+vboxmanageexe, url, null, api_handle_callback);
}


http.createServer(command_server).listen(port);
console.log('Server started on localhost:'+port);