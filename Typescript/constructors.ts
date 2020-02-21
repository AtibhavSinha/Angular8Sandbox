class EmployeeWithCons
{
    employeeName: string;
    salary: number;
    isActive: boolean;

    constructor(employeeName: string, salary: number, isActive: boolean)
    {
        this.employeeName = employeeName;
        this.salary = salary;
        this.isActive = isActive;
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

//Objects
var emp1: EmployeeWithCons;
emp1 = new EmployeeWithCons("John", 800, true);
console.log("emp1:");
console.log(emp1.employeeName);
console.log(emp1.salary);
console.log(emp1.isActive);
console.log(emp1.getNetSalary());

var emp2: EmployeeWithCons;
emp2 = new EmployeeWithCons("Miller", 17000, true);
console.log("\nemp2:");
console.log(emp2.employeeName);
console.log(emp2.salary);
console.log(emp2.isActive);
console.log(emp2.getNetSalary());
