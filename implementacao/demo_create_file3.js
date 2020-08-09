var fs = require('fs');

fs.writeFile('meunovoarquivo3.txt', 'Arquivo escrito!', function (err) {
    if (err)
    throw err;
    console.log('Arquivo escrito!');
})