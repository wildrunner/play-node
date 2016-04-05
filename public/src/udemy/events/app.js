var Emitter = require('events');
var eventConfig = require('./event_config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', function() {
    console.log('A greeting occured!');
});

emtr.emit('greet');

////////////
var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

var john = Object.create(person);
john.firstname = 'John';
console.log(john.greet());

var jane = new Person();
jane.firstname = 'jane';
console.log(jane.greet);
