const itemOne = {
  id: 1,
  name: 'iPhone',
  description: 'Tome text about this phone',
  sizes: [
    'max',
    'mini',
  ],
  price: 2000,
  available: true,
};

const itemTwo = {
  id: 2,
  name: 'samsung',
  description: 'Some text about this phone',
  sizes: [
    'max',
    'mini',
  ],
  price: 1500,
  available: true,
};

const itemThree = {
  id: 3,
  name: 'xiaomi',
  description: 'Some text about this phone',
  sizes: [
    'max',
    'mini',
  ],
  price: 1200,
  available: true,
};

const itemFour = {
  id: 4,
  name: 'nokia',
  description: 'Some text about this phone',
  sizes: [
    'max',
    'mini',
  ],
  price: 400,
  available: false,
};

const itemFive = {
  id: 5,
  name: 'lg',
  description: 'Some text about this phone',
  sizes: [
    'max',
    'mini',
  ],
  price: 1000,
  available: false,
};

basket = {
  items: [
    {
      good: itemOne,
      amount: 2,
    },
    {
      good: itemTwo,
      amount: 4,
    },
  ],
  addItem: function (item, amount) {
      this.items.push({
        good: item,
        amount: amount,
      });
  },
  dropItem: function (itemId) {
    for (let item of this.items) {
      if (item.good.id === itemId) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
      }
    }
  },
  clear: function () {
    this.items = [];
  },
  countTotal: function () {
    let amount = 0
    let sum = 0
    for (let item of this.items) {
      amount += item.amount;
      sum += item.good.price * item.amount;
    }
    return `
    totalAmount: ${amount}
    totalSum: ${sum}`
  }
};

basket.clear();
basket.addItem(itemFive, 4);
basket.addItem(itemFour, 3);
basket.addItem(itemTwo, 10);
basket.dropItem(3);
console.log(basket.countTotal());






