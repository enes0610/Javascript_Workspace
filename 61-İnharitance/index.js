console.clear();

class Person{
    firstname = "Enes";
    lastname = "Oğuz";

    write(){
        console.log("Person: ", this.firstname, this.lastname);
    }
}

class Student extends Person{
    write(){
        console.log("Student: ", this.firstname); // Person class'dan gelen
        super.write();
    }
}

//let person = new Person;
//person.write();

let student = new Student;
student.write();