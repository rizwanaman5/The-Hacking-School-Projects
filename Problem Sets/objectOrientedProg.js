const http = require('http');
const port = 8000;

const server = http.createServer(function(request, response) {
    response.end('My First server');
});

server.listen(port, function(){
    console.log(`Server started at port ${port}`);
})