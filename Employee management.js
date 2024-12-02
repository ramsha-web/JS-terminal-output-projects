let employees = [];

// Function to add a new employee
function addEmployee(name, role, salary) {
  employees.push({ name: name, role: role, salary: salary });
  console.log(`${name} added as a ${role} with a salary of $${salary}.`);
}

// Function to calculate the total payroll
function calculateTotalPayroll() {
  let total = 0;
  for (let i = 0; i < employees.length; i++) {
    total += employees[i].salary;
  }
  return total;
}

// Function to filter employees by role
function filterEmployeesByRole(role) {
  const filteredEmployees = employees.filter(employee => employee.role.toLowerCase() === role.toLowerCase());
  console.log(`Employees with role ${role}:`);
  filteredEmployees.forEach(employee => {
    console.log(`${employee.name} - $${employee.salary}`);
  });
}

// Function to find the highest and lowest-paid employees
function findHighestAndLowestPaidEmployees() {
  if (employees.length === 0) {
    console.log("No employees available.");
    return;
  }

  let highestPaid = employees.reduce((max, employee) => (employee.salary > max.salary ? employee : max));
  let lowestPaid = employees.reduce((min, employee) => (employee.salary < min.salary ? employee : min));

  console.log(`Highest Paid Employee: ${highestPaid.name} - $${highestPaid.salary}`);
  console.log(`Lowest Paid Employee: ${lowestPaid.name} - $${lowestPaid.salary}`);
}



addEmployee("Ali", "Manager", 75000);
addEmployee("Bilal", "Developer", 65000);
addEmployee("Sara", "Developer", 60000);
addEmployee("Mohsin", "HR", 50000) ;

// Calculate and display total payroll
console.log(`Total Payroll: $${calculateTotalPayroll()}`);

// Filter employees by role
filterEmployeesByRole("Developer");

// Find highest and lowest paid employees
findHighestAndLowestPaidEmployees();
