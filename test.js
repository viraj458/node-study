const name = 'viraj';
console.log(name);

const greet = (name) => {
    console.log(`hello ${name}`)
}

greet(name);

const os = require("os");
console.log(os.platform(), os.homedir())
