class Person {
    //Private Data Fields
    #name;
    #age;
    #gender;
    //constructor with three parameters
    constructor(name, age, gender) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }
    //getters method
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get gender() {
        return this.#gender;
    }

    //Method that Displays output via console.log
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);

    }

    //Method that Displays output via HTML
    displayInfoViaHTML() {
        const personElement = documentElementById('person1');
        personElement.innerHTML = `
          <strong>Name: </strong> ${this.name} <br>
          <strong>Age: </strong> ${this.age} <br>
          <strong>Gender: </strong> ${this.gender} <br>
        `;
    }
}

class Student extends Person {

    //Constructor
    constructor(name, age, gender, year, degree) {
        super(name, age, gender);
        this.year = year;
        this.degree = degree; 
    }

    //Overriding the displayInfo method from Person class
    displayInfo() {
        super.displayInfo();
        console.log("Year: " + this.year);
        console.log("Degree: " + this.degree);
    }

    displayInfoViaHTML() {
        super.displayInfoViaHTML();
        const personElement = documentElementById('person1');
        personElement.innerHTML = `
           <strong> Year: </strong> ${this.year} <br>
           <strong> Degree: </strong> ${this.degree}
        `;
    }
}
//Declaring an instance to access the Student class
const student1 = new Student('Fhiona', 19, 'Female', '2nd year', 'BSIT');

//Calling methods
student1.displayInfo();
