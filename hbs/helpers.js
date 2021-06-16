const hbs = require('hbs');

// helpers
hbs.registerHelper('getAnio', () => {

    return new Date().getFullYear();

});

hbs.registerHelper('capitalizar', (texto) => {
    let palabraS = texto.split(' ');
    palabraS.forEach((palabra, idx) => {
        palabraS[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabraS.join(' ')
});