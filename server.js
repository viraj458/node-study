const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // //set header content type
    res.setHeader('Content-Type', 'text/html');

    // res.write('<p>Hello</p>');
    // res.write('<p>hello hello</p>')

    // res.end()

    //send html file
    fs.readFile('./view/index.html', (err, data) => {
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