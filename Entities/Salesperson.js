export class Salesperson {
  static salespersonNum = 0;

  constructor(
    firstName,
    lastName,
    address,
    phone,
    startDate,
    terminationDate,
    manager
  ) {
    this.salespersonID = Salesperson.salespersonNum++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.startDate = startDate;
    this.terminationDate = terminationDate;
    this.manager = manager;
  }
}
