const mysql = require('mysql');

const conect = mysql.createConnection({
    host:'LocalHost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'resttable'
});
conect.connect(function(err){
    if(err) return console.log(err);
    console.log('Conexão Realizada com Sucesso');
});