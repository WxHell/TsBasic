class Customer {
  private firstName: string;
  private lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
  public getFirstName(): string {
    return this.firstName;
  }
  public getLastName(): string {
    return this.lastName;
  }

  public setFirstName(theFirst: string): void {
    this.firstName = theFirst;
  }

  public setLastName(theLast: string): void {
    this.lastName = theLast;
  }
}
let myCustomer = new Customer("Alper", "Berk");
// console.log(`Hello ${myCustomer.firstName} ${myCustomer.lastName} welcome`); kod çalışmaya devam eder
