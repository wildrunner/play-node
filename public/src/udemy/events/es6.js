var obj = {
    name: 'John',
    greet: function() {
        console.log(`Hello ${ this.name}`);
    }
}

obj.greet();
obj.greet.call({name: "Jane"});
obj.greet.apply({name: "Jane"});