var fs = require('fs');

fs.appendFile('meunovoarquivo.txt','Olá conteúdo substituido', function(err, file){
    if (err)
        throw err;
    console.log('Arquivo salvo!');
});