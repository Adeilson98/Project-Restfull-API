module.exports = function(app){
    app.get('/',(req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Tudo certo com as Rotas!</h1>');
    });
}