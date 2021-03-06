class EmployeeClass
{
    employeeName: string;
    salary: number;
    isActive: boolean;

    getNetSalary(): number
    {
        let netsal : number;

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

//Objects
var emp1 : EmployeeClass;
emp1 = new EmployeeClass();
emp1.employeeName = "John";
emp1.salary = 8000;
emp1.isActive = true;
console.log("emp1:");
console.log(emp1.employeeName);
console.log(emp1.salary);
console.log(emp1.isActive);
console.log(emp1.getNetSalary());

var emp2 : EmployeeClass;
emp2 = new EmployeeClass();
emp2.employeeName = "Miller";
emp2.salary = 17000;
emp2.isActive = true;
console.log("\nemp2:");
console.log(emp2.employeeName);
console.log(emp2.salary);
console.log(emp2.isActive);
console.log(emp2.getNetSalary());

var emp3 : EmployeeClass;
emp3 = new EmployeeClass();
emp3.employeeName = "Jones";
emp3.salary = 5600;
emp3.isActive = false;
console.log("emp3:");
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.getNetSalary());

