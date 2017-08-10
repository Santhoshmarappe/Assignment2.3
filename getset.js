//Create a class with get and set function.
var person = (function () {
    function person() {
    }
    Object.defineProperty(person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    person.prototype.personName = function (name) {
        if (name === this.name) {
            return "The username " + name + " is a valid User";
        }
        else {
            return "The username " + name + " is invalid User";
        }
    };
    return person;
}());
var ashok = new person();
ashok.setName = "";
document.write(ashok.personName("John Smith"));
//Output:The username John Smith is invalid User" 
