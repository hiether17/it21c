class Person {

    //Data fields
    #name;
    #age;
    #gender;
    #height;
    #weight;

    constructor(name, age, gender, height, weight) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
        this.#height = height;
        this.#weight = weight;
    }

    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    get gender() {
        return this.#gender;
    }
    get height() {
        return this.#height;
    }
    get weight() {
        return this.#weight;
    }

    //Displays output via Console.log
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Height: " + this.height);
        console.log("Weight: " + this.weight);
    }
}

//Creating an instance of the Person Class
const person1 = new Person('Fhiona', 19, 'Female', '4/11', 55);

//Calling method
person1.displayInfo();

