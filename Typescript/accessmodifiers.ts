class PersonAccess
{
    protected personName: string; // public or private : Same as JAVA
    public age: number;

    constructor(personName: string, age: number)
    {
        this.personName = personName;
        this.age = age;
    }
}

class EmployeeAccess extends PersonAccess
{
    salary: number;
    isActive: boolean;

    constructor(personName: string, age: number, salary: number, isActive: boolean)
    {
        super(personName, age);
        this.salary = salary;
        this.isActive = isActive;
        console.log(this.personName);
    }

    getNetSalary(): number
    {
        let netsal: number;

        if (this.isActive == true)
        {
            if (this.salary < 10000)
            {
                netsal = this.salary - (this.salary * 10 / 100);
            }
            else
            {
                netsal = this.salary - (this.salary * 15 / 100);
            }
        }
        else
        {
            netsal = 0;
        }
        return netsal;
    }
}

//Array of objects
var emps: EmployeeAccess[] = [
    new EmployeeAccess("John", 24, 800, true),
    new EmployeeAccess("Miller", 51, 17000, true),
    new EmployeeAccess("Jones", 36, 5600, false)
];

emps.push(new EmployeeAccess("Anna", 43, 7300, true));

//Objects
for (let i = 0; i < emps.length; i++)
{
    console.log("\nemployee:");
    //console.log(employees[i].personName);
    console.log(emps[i].age);
    console.log(emps[i].salary);
    console.log(emps[i].isActive);
    console.log(emps[i].getNetSalary());
}
