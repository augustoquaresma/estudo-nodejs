var events = require('events')
var eventsEmitter = new events.EventEmitter();

//escuta o evento
var meuEvento = function() {
    console.log('Eu tenho um sorvete!');
}

//Vinculando o evento ao escutador
eventsEmitter.on('sorvete',meuEvento);

//Emita o evento
eventsEmitter.emit('sorvete');