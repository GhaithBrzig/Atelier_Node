var http = require('http');
var url = require("url");
const querystring = require("querystring");






const routerLogger = (path) => {
    if (path === "/"){
        return { status : 200 , message : "home page !"};
    }
    else if (path ==="/contact"){
        return { status : 200 , message : "contact page !"};
    }
    else if (path ==="/affichage/1/user"){
        return { status : 200 , message : "afficher l\'utilisateur qui a l\'id 1  !"};
    }
    else {
        return { status :200 , message :"page not found "};
    }
}

var server = http.createServer(function(req,res){
    res.writeHead(200);
    var page = url.parse(req.url).pathname;
    var params =querystring.parse(url.parse(req.url).query);
    res.writeHead(200,{"Content-Type": "text/plain"});

    console.log("req.url ",url.parse(req.url).pathname);
    res.writeHead(200,{"Content-type":"text/plain"});
    if('id' in params && 'login' in params) {
        res.write('Votre id est ' + params['id'] +
            'et votre login' +' '+params['login']);

    }
    else
    {
        res.write('Voouillez saisir votre id et login !');
    }
    const routerLogs = routerLogger(page);
    res.write(routerLogs.message);
    //if(page ==='/'){
    //    res.write('vous etes dans la page d\'accueil ');
    //}
    //else if (page === '/contact'){
    //    res.write('vous etes dasns la page contact');
    //}
    //else if (page == '/affichage/1/user'){
    //   res.write('afficher l\'utilisateur qui a l\'id 1 !');
    //}
    //res.end();
    res.end();
    //res.write('Bien on vacanse !');
    //res.end();

    //res.writeHead(200,{"Content-type":"text/html"});
    //res.write('<DOCTYPE html>'+'<html>'+'<head>'+'<meta charset="utf-8" />'+'<title>Ma page node.js </title>'+'</head>'+'<body>'+'<p>Voici un paragraphe <strong>HTML</strong> ! </p>'+'</body>'+'</html>');
    //res.end();
    //res.end('salut les websites !');
})

server.listen(8080);