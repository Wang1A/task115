import Person from "../../src/practice_5/person.js";
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        return this.basic_introduce() + " I am a Student. I am at Class "+this.klass+".";
    }
}

export default Student;
