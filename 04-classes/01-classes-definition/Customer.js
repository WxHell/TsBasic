var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Customer.prototype.show = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName, " welcome"));
    };
    return Customer;
}());
var myCustomer = new Customer("Alper", "Berk");
// console.log(`Hello ${myCustomer.firstName} ${myCustomer.lastName} welcome`); kod çalışmaya devam eder
myCustomer.show();
