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

function consultTable(conn){
    if(conect){
        const sqlCommand = "select * from resttable.cadastro;";

        conn.query(sqlCommand, function(err){
            if(err) console.log('Erro ao procurar Tabela');
            console.log('Consulta realizada com sucesso!')
        });
    }
}