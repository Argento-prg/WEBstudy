var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("URL страницы: " + req.url)
    //res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
    //res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});

    var obj = {
        model: 'Audi',
        speed: '234.5',
        wheels: 4
    };

    res.end(JSON.stringify(obj));

    var myReadshort = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadshort.pipe(res);//запись данных из Readshort в res
    
    //res.end('Привет мир!');
});

server.listen('3000', '127.0.0.1');

console.log("Мы следим за портом 3000");

var myReadshort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
var myWriteshort = fs.createWriteStream(__dirname + '/news.txt');


myReadshort.on('data', function(chunk){
    console.log("Новые данные получены:\n" + chunk);
    myWriteshort.write(chunk);
});

myReadshort.pipe(myWriteshort);//запись данных из Readshort в Writeshort

