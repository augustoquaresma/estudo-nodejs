var fs = require('fs');

fs.appendFile('meunovoarquivo.txt', 'Olá conteúdo', function (err) {
    if(err)
     throw err;
    console.log('Arquivo salvo!')
})