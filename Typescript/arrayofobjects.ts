class EmployeeArray
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

//Array of objects
var employees : EmployeeArray[] = [
    new EmployeeArray("John", 800, true),
    new EmployeeArray("Miller", 17000, true),
    new EmployeeArray("Jones", 5600, false)
];

employees.push(new EmployeeArray("Anna", 7300, true));

//Objects
console.log("emp1:");
console.log(employees[0].employeeName);
console.log(employees[0].salary);
console.log(employees[0].isActive);
console.log(employees[0].getNetSalary());

console.log("\nemp2:");
console.log(employees[1].employeeName);
console.log(employees[1].salary);
console.log(employees[1].isActive);
console.log(employees[1].getNetSalary());

console.log("\nemp3:");
console.log(employees[2].employeeName);
console.log(employees[2].salary);
console.log(employees[2].isActive);
console.log(employees[2].getNetSalary());

console.log("\nemp4:");
console.log(employees[3].employeeName);
console.log(employees[3].salary);
console.log(employees[3].isActive);
console.log(employees[3].getNetSalary());
