export class Discount {
  static discountNum = 0;

  constructor(product, beginDate, endDate, discountPercentage) {
    this.discountID = Discount.discountNum++;
    this.product = product;
    this.beginDate = beginDate;
    this.endDate = endDate;
    this.discountPercentage = discountPercentage;
  }
}
