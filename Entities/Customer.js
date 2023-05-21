export class Customer {
  static customerNum = 0;

  constructor(firstName, lastName, address, phone, startDate) {
    this.customerID = Customer.customerNum++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.startDate = startDate;
  }
}
