var fs = require('fs');

fs.rename('meunovoarquivo.txt', 'meuarquivo.txt', function(err){
    if (err) throw err;
    console.log('Arquivo renomeado!');
})