var fs = require('fs');

fs.writeFile('meunovoarquivo3.txt', 'Novo!', function (err) {
    if (err)
        throw err;
    console.log('Arquivo alterado!');
})