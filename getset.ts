//Create a class with get and set function.
class person {
    name: string;

    set setName (name: string) {
        this.name = name;
    }

    get getName () {
        return this.name;
    }

    personName (name: string) {
        if(name === this.name) {
            return `The username ${name} is a valid User`
        } else {
            return `The username ${name} is invalid User`
        }
    }
}

var ashok = new person();
ashok.setName = "";

document.write(ashok.personName("John Smith"));

//Output:The username John Smith is invalid User"