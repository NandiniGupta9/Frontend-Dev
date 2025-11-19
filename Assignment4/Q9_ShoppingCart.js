class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  applyCoupon(code) {
    let reg = /^(SAVE|DISC)(\d{2})$/;
    if (!reg.test(code)) return "Invalid Coupon";

    let percent = Number(code.match(/\d+/)[0]);
    let total = this.getTotal();
    return total - (total * percent) / 100;
  }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

console.log("Total:", cart.getTotal());
console.log("After Coupon:", cart.applyCoupon("SAVE20"));
