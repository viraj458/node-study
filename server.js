const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);


    let path = './view/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;

    }
    
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            // console.log(data.toString());
            res.end(data);
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listen to port 3000')
})