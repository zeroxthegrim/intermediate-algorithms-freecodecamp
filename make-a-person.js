/*

Fill in the object constructor with the following methods below:
    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept 
only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.

*/


var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    let firstName = fullName.split(" ")[0];
    let lastName = fullName.split(" ")[1];
    this.getFullName = function () {
        return `${firstName} ${lastName}`;
    };

    this.getFirstName = function () {
        return firstName;
    }

    this.getLastName = function () {
        return lastName;
    }

    this.setFirstName = function (first) {
        firstName = first;
    }

    this.setLastName = function (last) {
        lastName = last;
    }

    this.setFullName = function (newFirstAndLast) {
        fullName = newFirstAndLast;
        firstName = newFirstAndLast.split(" ")[0];
        lastName = newFirstAndLast.split(" ")[1];
    }
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry")
console.log(bob.getFullName());