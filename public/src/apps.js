function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log(this.firstname);
};

var john = new Person('John', 'Doe');
john.greet();
