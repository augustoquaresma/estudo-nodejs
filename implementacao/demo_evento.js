var fs = require('fs');
var rs = fs.createReadStream('./meuarquivo.txt');

rs.on('open', function(){
    console.log('Arquivo está aberto!');
} )