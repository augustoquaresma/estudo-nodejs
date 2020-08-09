var fs = require('fs');

fs.unlink('meunovoarquivo3.txt', function(err){
    if (err) throw err;
    console.log('Arquivo excluido!');
})