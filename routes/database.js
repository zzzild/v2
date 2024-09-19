const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database : 'mamen',
    user : 'root',
    password : ''
})

connection.connect(function(err){
    if(err)
    {
        throw err
    }
    else{

    }console.log("Mysql connect succesfuly");
})

module.exports = connection