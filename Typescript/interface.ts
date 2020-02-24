interface IPerson {
     personName: string; // no access specifies by default public
     age: number;
     getFullName(): string;

}

class PersonImpl implements IPerson
{
    
    public personName: string; // public or private : Same as JAVA
    public age: number;

    constructor(personName: string, age: number)
    {
        this.personName = personName;
        this.age = age;
    }
    getFullName(): string {
       return this.personName;
    }

}

var p : IPerson = new PersonImpl("Atibhav Sinha", 30);
console.log("Full Name : " + p.getFullName());