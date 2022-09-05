var http = require('html');
const fs = require('fs');
var pet;


fs.readFile("../librairy/test", 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    return ;
    }
    console.log(data);
});



