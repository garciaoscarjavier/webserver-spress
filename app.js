const http = require('http');
const { clearScreenDown } = require('readline');

http.createServer((req, res) => {


        res.writeHead(200, { 'Content-Type': 'application/json' });


        let salida = {
            nombre: 'OSCAR',
            edad: '27',
            url: req.url

        }

        res.write(JSON.stringify(salida));

        // res.write('HOLAMUNDO');
        res.end();
    })
    .listen(8080);

console.log('escuchando el puerto 8080');