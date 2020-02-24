var PersonImpl = /** @class */ (function () {
    function PersonImpl(personName, age) {
        this.personName = personName;
        this.age = age;
    }
    PersonImpl.prototype.getFullName = function () {
        return this.personName;
    };
    return PersonImpl;
}());
var p = new PersonImpl("Atibhav Sinha", 30);
console.log("Full Name : " + p.getFullName());
