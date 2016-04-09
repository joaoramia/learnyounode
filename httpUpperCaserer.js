var http = require('http');

var server = http.createServer(httpHandler);

server.listen(process.argv[2]);

function httpHandler(req, response) {
    if(req.method != 'POST') {
        console.log('illegal request method');
    }
    else {
        req.on('data', handlePostData(response));
    }
}

function handlePostData(response) {
    return function(data) {
        var str = data.toString();
        str = str.toUpperCase();
        response.write(str);
    };
};
