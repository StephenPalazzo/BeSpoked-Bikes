// Entities
import { Product } from './Entities/Product.js';
import { Salesperson } from './Entities/Salesperson.js';
import { Customer } from './Entities/Customer.js';
import { Sale } from './Entities/Sale.js';
import { Discount } from './Entities/Discount.js';

// "Database" of entities
const products = [
  new Product('Turbo I', 'Top Bikez', 'Touring', 2000, 2300, 10, 6),
  new Product('Turbo II', 'Top Bikez', 'Touring', 4000, 4300, 5, 12),
  new Product('Trickz', 'MoreBikes', 'BMX', 1000, 1200, 20, 5),
];

const salespersons = [
  new Salesperson(
    'Jim',
    'Smith',
    '3421 Free Street Way',
    '4583219824',
    new Date(2020, 3, 23),
    null,
    'Tracey Williams'
  ),
  new Salesperson(
    'Ace',
    'Patrick',
    '91 Windy Lane',
    '9182462826',
    new Date(2017, 11, 12),
    new Date(2019, 1, 7),
    'Tracey Williams'
  ),
  new Salesperson(
    'Lexi',
    'Golden',
    '271 Long Way',
    '2389120182',
    new Date(2019, 4, 19),
    null,
    'Tracey Williams'
  ),
];

const customers = [
  new Customer(
    'Stephen',
    'Palazzo',
    '921 Twisted Way',
    '9230218734',
    new Date(2022, 1, 18)
  ),
  new Customer(
    'Abby',
    'Far',
    '23 Long Way',
    '8239273927',
    new Date(2020, 2, 5)
  ),
  new Customer(
    'Max',
    'Mad',
    '12 Straight Street',
    '8293729273',
    new Date(2021, 6, 22)
  ),
];

const sales = [
  new Sale(products[0], salespersons[0], customers[0], new Date(2023, 3, 21)),
  new Sale(products[0], salespersons[1], customers[1], new Date(2022, 7, 21)),
  new Sale(products[1], salespersons[2], customers[2], new Date(2023, 3, 21)),
];

const discounts = [
  new Discount(products[0], new Date(2022, 1, 10), new Date(2022, 1, 15), 20),
];

// Accessing data lists
function getSalesperson(salespersonID) {
  for (let i = 0; i < salespersons.length; i++) {
    if (salespersons[i].salespersonID == salespersonID) {
      return salespersons[i];
    }
  }

  return null;
}

function getProduct(productID) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productID == productID) {
      return products[i];
    }
  }

  return null;
}

function getCustomer(customerID) {
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].customerID == customerID) {
      return customers[i];
    }
  }

  return null;
}

function addProduct(product) {
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].name === product.name &&
      products[i].manufacturer === product.manufacturer &&
      products[i].style === product.style
    ) {
      return;
    }

    products.push(product);
  }

  return null;
}

function addSalesperson(salesperson) {
  for (let i = 0; i < salespersons.length; i++) {
    if (
      salespersons[i].firstName === salesperson.firstName &&
      salespersons[i].lastName === salesperson.lastName &&
      salespersons[i].address === salesperson.address
    ) {
      return;
    }

    salespersons.push(salesperson);
  }

  return null;
}

// List rendering functions
function renderSaleList() {
  const salesList = document.getElementById('sales');

  while (salesList.firstChild) salesList.removeChild(salesList.firstChild);

  for (let i = 0; i < sales.length; i++) {
    const newRow = document.createElement('div');
    newRow.id = i;
    newRow.className = 'card card-body';

    const productLabel = document.createElement('label');
    productLabel.textContent = 'Product: ' + sales[i].product.name;
    const salespersonLabel = document.createElement('label');
    salespersonLabel.textContent =
      'Salesperson: ' +
      sales[i].salesperson.lastName +
      ', ' +
      sales[i].salesperson.firstName;
    const customerLabel = document.createElement('label');
    customerLabel.textContent =
      'Customer: ' +
      sales[i].customer.lastName +
      ', ' +
      sales[i].customer.firstName;
    const saleDateLabel = document.createElement('label');
    saleDateLabel.textContent =
      'Sale Date: ' + sales[i].salesDate.toLocaleDateString();

    newRow.appendChild(productLabel);
    newRow.appendChild(salespersonLabel);
    newRow.appendChild(customerLabel);
    newRow.appendChild(saleDateLabel);
    salesList.appendChild(newRow);
  }
}

function renderProductList() {
  const productsList = document.getElementById('products');

  while (productsList.firstChild)
    productsList.removeChild(productsList.firstChild);

  for (let i = 0; i < products.length; i++) {
    const newRow = document.createElement('div');
    newRow.id = i;
    newRow.className = 'card card-body';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-success delete';
    deleteBtn.appendChild(document.createTextNode('Edit'));

    const productLabel = document.createElement('label');
    productLabel.textContent = 'Product: ' + products[i].name;
    const manufacturerLabel = document.createElement('label');
    manufacturerLabel.textContent = 'Manufacturer: ' + products[i].manufacturer;
    const styleLabel = document.createElement('label');
    styleLabel.textContent = 'Style: ' + products[i].style;
    const purPriceLabel = document.createElement('label');
    purPriceLabel.textContent = 'Purchase Price: $' + products[i].purchasePrice;
    const salPriceLabel = document.createElement('label');
    salPriceLabel.textContent = 'Sale Price: $' + products[i].salePrice;
    const qtyLabel = document.createElement('label');
    qtyLabel.textContent = 'Qty on Hand: ' + products[i].qtyOnHand;
    const commissionLabel = document.createElement('label');
    commissionLabel.textContent =
      'Commission: ' + products[i].commissionPercentage + '%';

    newRow.appendChild(productLabel);
    newRow.appendChild(manufacturerLabel);
    newRow.appendChild(styleLabel);
    newRow.appendChild(purPriceLabel);
    newRow.appendChild(salPriceLabel);
    newRow.appendChild(qtyLabel);
    newRow.appendChild(commissionLabel);
    newRow.appendChild(deleteBtn);
    productsList.appendChild(newRow);
  }
}

function renderCustomerList() {
  const customersList = document.getElementById('customers');

  while (customersList.firstChild)
    customersList.removeChild(customersList.firstChild);

  for (let i = 0; i < customers.length; i++) {
    const newRow = document.createElement('div');
    newRow.id = i;
    newRow.className = 'card card-body';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-success delete';
    deleteBtn.appendChild(document.createTextNode('Edit'));

    const nameLabel = document.createElement('label');
    nameLabel.textContent =
      'Name: ' + customers[i].lastName + ', ' + customers[i].firstName;
    const addressLabel = document.createElement('label');
    addressLabel.textContent = 'Address: ' + customers[i].address;
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone #: ' + customers[i].phone;
    const startDateLabel = document.createElement('label');
    startDateLabel.textContent =
      'Start Date: ' + customers[i].startDate.toLocaleDateString();

    newRow.appendChild(nameLabel);
    newRow.appendChild(addressLabel);
    newRow.appendChild(phoneLabel);
    newRow.appendChild(startDateLabel);
    newRow.appendChild(deleteBtn);

    customersList.appendChild(newRow);
    newRow.appendChild(deleteBtn);
  }
}

function renderSalespersonList() {
  const salespersonsList = document.getElementById('salespersons');

  while (salespersonsList.firstChild)
    salespersonsList.removeChild(salespersonsList.firstChild);

  for (let i = 0; i < salespersons.length; i++) {
    const newRow = document.createElement('div');
    newRow.id = i;
    newRow.className = 'card card-body';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-success delete';
    deleteBtn.appendChild(document.createTextNode('Edit'));

    const nameLabel = document.createElement('label');
    nameLabel.textContent =
      'Name: ' + salespersons[i].lastName + ', ' + salespersons[i].firstName;
    const addressLabel = document.createElement('label');
    addressLabel.textContent = 'Address: ' + salespersons[i].address;
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone #: ' + salespersons[i].phone;
    const startDateLabel = document.createElement('label');
    startDateLabel.textContent =
      'Start Date: ' + salespersons[i].startDate.toLocaleDateString();
    const terminateDateLabel = document.createElement('label');
    terminateDateLabel.textContent =
      'Terminate Date: ' +
      (salespersons[i].terminationDate === null
        ? 'Still Employed'
        : salespersons[i].terminationDate.toLocaleDateString());
    const managerLabel = document.createElement('label');
    managerLabel.textContent = 'Manager: ' + salespersons[i].manager;

    newRow.appendChild(nameLabel);
    newRow.appendChild(addressLabel);
    newRow.appendChild(phoneLabel);
    newRow.appendChild(startDateLabel);
    newRow.appendChild(terminateDateLabel);
    newRow.appendChild(managerLabel);
    newRow.appendChild(deleteBtn);

    salespersonsList.appendChild(newRow);
    newRow.appendChild(deleteBtn);
  }
}

// Initial list loads
renderSaleList();
renderProductList();
renderCustomerList();
renderSalespersonList();

// Create a Sale
const form = document.getElementById('addForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const productID = document.getElementById('productID').value;
  const salespersonID = document.getElementById('salespersonID').value;
  const customerID = document.getElementById('customerID').value;
  const salesDate = document.getElementById('sales-date').value;

  if (
    getProduct(productID) == null ||
    getSalesperson(salespersonID) == null ||
    getCustomer(customerID) == null
  ) {
    return;
  }

  const sale = new Sale(
    getProduct(productID),
    getSalesperson(salespersonID),
    getCustomer(customerID),
    new Date(salesDate)
  );
  sales.push(sale);
  getProduct(productID).updateQty();
  renderProductList();

  document.getElementById('productID').value = '';
  document.getElementById('salespersonID').value = '';
  document.getElementById('customerID').value = '';
  document.getElementById('sales-date').value = '';

  const newRow = document.createElement('div');
  newRow.id = sales.length;
  newRow.className = 'card card-body';

  const productLabel = document.createElement('label');
  productLabel.textContent = 'Product: ' + products[productID].name;
  const salespersonLabel = document.createElement('label');
  salespersonLabel.textContent =
    'Salesperson: ' +
    salespersons[salespersonID].lastName +
    ', ' +
    salespersons[salespersonID].firstName;
  const customerLabel = document.createElement('label');
  customerLabel.textContent =
    'Customer: ' +
    customers[customerID].lastName +
    ', ' +
    customers[customerID].firstName;
  const saleDateLabel = document.createElement('label');
  saleDateLabel.textContent =
    'Sale Date: ' + sale.salesDate.toLocaleDateString();

  newRow.appendChild(productLabel);
  newRow.appendChild(salespersonLabel);
  newRow.appendChild(customerLabel);
  newRow.appendChild(saleDateLabel);
  const salesList = document.getElementById('sales');
  salesList.appendChild(newRow);
});

// Filter sales by date range
const dateRange = document.getElementById('date-range');
dateRange.addEventListener('change', (e) => {
  const salesList = document.getElementById('sales');
  while (salesList.firstChild) salesList.removeChild(salesList.firstChild);

  const startDate = new Date(document.getElementById('start-date').value);
  const endDate = new Date(document.getElementById('end-date').value);
  if (endDate != null) endDate.setDate(endDate.getDate() + 1);

  for (let i = 0; i < sales.length; i++) {
    if (startDate <= sales[i].salesDate && sales[i].salesDate <= endDate) {
      const newRow = document.createElement('div');
      newRow.id = sales.length;
      newRow.className = 'card card-body';

      const productLabel = document.createElement('label');
      productLabel.textContent = 'Product: ' + sales[i].product.name;
      const salespersonLabel = document.createElement('label');
      salespersonLabel.textContent =
        'Salesperson: ' +
        sales[i].salesperson.lastName +
        ', ' +
        sales[i].salesperson.firstName;
      const customerLabel = document.createElement('label');
      customerLabel.textContent =
        'Customer: ' +
        sales[i].customer.lastName +
        ' ' +
        sales[i].customer.firstName;
      const saleDateLabel = document.createElement('label');
      saleDateLabel.textContent =
        'Sale Date: ' + sales[i].salesDate.toLocaleDateString();

      newRow.appendChild(productLabel);
      newRow.appendChild(salespersonLabel);
      newRow.appendChild(customerLabel);
      newRow.appendChild(saleDateLabel);
      salesList.appendChild(newRow);
    }
  }
});

// Commission Report
const commissionSearch = document.getElementById('commission-search');
commissionSearch.addEventListener('change', (e) => {
  const commissionReport = document.getElementById('commission-report');
  while (commissionReport.firstChild)
    commissionReport.removeChild(commissionReport.firstChild);

  const salespersonID = document.getElementById('salesperson-commission').value;
  if (salespersonID < 0 || salespersonID >= Salesperson.salespersonNum) return;

  let startDate;
  let endDate;
  const year = new Date().getFullYear();

  if (document.getElementById('Q1').checked) {
    startDate = new Date(year, 0, 1);
    endDate = new Date(year, 3, 1);
  } else if (document.getElementById('Q2').checked) {
    startDate = new Date(year, 3, 1);
    endDate = new Date(year, 6, 1);
  } else if (document.getElementById('Q3').checked) {
    startDate = new Date(year, 6, 1);
    endDate = new Date(year, 9, 1);
  } else if (document.getElementById('Q4').checked) {
    startDate = new Date(year, 9, 1);
    endDate = new Date(year + 1, 12, 1);
  }

  let totalCommission = 0;
  for (let i = 0; i < sales.length; i++) {
    if (
      sales[i].salesperson.salespersonID == salespersonID &&
      startDate <= sales[i].salesDate &&
      endDate >= sales[i].salesDate
    ) {
      totalCommission += sales[i].getSalespersonCommission();
    }
  }

  const newRow = document.createElement('div');
  newRow.className = 'card card-body';

  const nameLabel = document.createElement('label');
  nameLabel.textContent =
    'Employee: ' +
    salespersons[salespersonID].lastName +
    ', ' +
    salespersons[salespersonID].firstName;
  const addressLabel = document.createElement('label');
  addressLabel.textContent = 'Quarterly Commission: $' + totalCommission;

  newRow.appendChild(nameLabel);
  newRow.appendChild(addressLabel);

  commissionReport.appendChild(newRow);
});
