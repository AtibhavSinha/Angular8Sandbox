var student : any = {
    studentId: 101,
    studentName: "Scott",
    marks: 80,
    getResult: function( ) {
        if (this.marks >= 35)
        {
            return "Pass";
        }
        else
        {
            return "Fail";
        }
    }
};

student.email = "scott@dummy.com";
console.log(student.studentId);
console.log(student.studentName);
console.log(student.marks);
console.log(student.getResult());
console.log(student.email);