class Employee {
  constructor(id, name, dept, salary) {
    this.id = id;
    this.name = name;
    this.department = dept;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Amit", "IT", 30000),
  new Employee(2, "Sara", "HR", 28000),
  new Employee(3, "Rohan", "Finance", 35000),
  new Employee(4, "Kiran", "Tech", 50000),
  new Employee(5, "Maya", "Support", 25000),
];

const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Total Annual Payout:", totalPayout);
