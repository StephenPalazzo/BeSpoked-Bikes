export class Sale {
  static saleNum = 0;

  constructor(product, salesperson, customer, salesDate) {
    this.saleID = Sale.saleNum++;
    this.product = product;
    this.salesperson = salesperson;
    this.customer = customer;
    this.salesDate = salesDate;
  }

  getSalespersonCommission() {
    return (this.product.salePrice * this.product.commissionPercentage) / 100;
  }
}
