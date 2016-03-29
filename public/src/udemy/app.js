var Emitter = require('./event_emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', function() {
    console.log('A greeting occured!');
});

emtr.emit('greet');
