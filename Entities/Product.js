export class Product {
  static productNum = 0;

  constructor(
    name,
    manufacturer,
    style,
    purchasePrice,
    salePrice,
    qtyOnHand,
    commissionPercentage
  ) {
    this.productID = Product.productNum++;
    this.name = name;
    this.manufacturer = manufacturer;
    this.style = style;
    this.purchasePrice = purchasePrice;
    this.salePrice = salePrice;
    this.qtyOnHand = qtyOnHand;
    this.commissionPercentage = commissionPercentage;
  }

  updateQty() {
    this.qtyOnHand--;
  }
}
