const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// expres hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {

        nombre: 'oscar garcia'




    });

});


app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'oscar garcia',


    });

});

app.listen(port, () => {
    console.log(`escuchando peticiones del puerto ${ port }`);
});