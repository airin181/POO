class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    } getDetails() {
        console.log(`My name is ${this.name}, I am a ${this.age} years old ${this.gender}.`)

    }

}

const Pepe = new Person("pepe", 18, "man")

class Student extends Person {
    constructor(name, age, gender, course, group) {
        super(name, age, gender);
        this.course = course;
        this.group = group;
    }register(){
        console.log(`My name is ${this.name}, I am a ${this.age} years old ${this.gender}. My class is ${this.course}${this.group}`)

    }
}

const Maria = new Student("Maria", 22, "Femenino", 1, "A")



class Teacher extends Person {
    constructor(name, age, gender, course, group) {
        super(name, age, gender);
        this.subject = course;
        this.level = group;
    }
    assign(){
    console.log(`My name is ${this.name}, I am a ${this.age} years old ${this.gender}. I teach ${this.subject} to students with ${this.level} level`)

    }
}

const Mariandro = new Teacher("Alejandro", 35, "man", "POO", "A")
