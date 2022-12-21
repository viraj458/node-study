const fs = require('fs');


//reading files
fs.readFile('./docs.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    {console.log(data.toString())};
})

console.log("last line")



//writting files
fs.writeFile('/docs1.txt', "Viraj", () => {
    console.log('file was changed');
});

console.log('ggg');



//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder created');
    })
    
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder removed')
    })
}



//deleting files
if(fs.existsSync('./assets/delete.txt')){
    fs.unlink('./assets/delete.txt', (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('file deleted');
        }
        
    })
}