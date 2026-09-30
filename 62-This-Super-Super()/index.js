console.clear();

class Person{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    writeİnfo(){
        console.log(this.name, this.surname, this.age);
    }
}

class Student extends Person{
    constructor(name, surname, age){
        super(name, surname, age);
    }

    writeİnfo(){
        super.writeİnfo();
    }
}

class Enginner extends Person{
    constructor(name, surname, age){
        super(name, surname, age);
    }

    writeİnfo(){
        super.writeİnfo();
    }
}

let student = new Student("Enes", "Oğuz", 25);
let enginner = new Enginner("Ayşe", "Güler", 50);

let student1 = new Student("John", "Doe", 33);
let enginner1 = new Enginner("Bill", "Musk", 65);

student.writeİnfo();
enginner.writeİnfo();
student1.writeİnfo();
enginner1.writeİnfo();