/* In this example, Employee is an abstract class that provides a base for FullTimeEmployee and PartTimeEmployee. Each of these child classes override the calculateBonus method according to their own rules. A for loop is used to iterate over an array of Employee objects.*/
abstract class Employee {
  constructor(public name: string, public salary: number) {}

  abstract calculateBonus(): number;
}

class FullTimeEmployee extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  calculateBonus(): number {
    // Full time employees get 50% of salary as bonus
    return this.salary * 0.5;
  }
}

class PartTimeEmployee extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  calculateBonus(): number {
    // Part time employees get 30% of salary as bonus
    return this.salary * 0.3;
  }
}

let employees: Employee[] = [];
employees.push(new FullTimeEmployee("John Doe", 80000));
employees.push(new PartTimeEmployee("Jane Doe", 50000));

for (let employee of employees) {
  console.log(`Bonus for ${employee.name}: ${employee.calculateBonus()}`);
}

/*
Output:

Bonus for John Doe: 40000
Bonus for Jane Doe: 15000
*/