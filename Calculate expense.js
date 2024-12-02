// Array to store expense records
let expenses = [];

// Function to add a new expense
function addExpense(date, amount, category) {
  expenses.push({ date: date, amount: amount, category: category });
  console.log(`Expense added: ${category} - $${amount} on ${date}`);
}

// Function to calculate total expenses for a given category
function calculateCategoryTotal(category) {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].category === category) {
      total += expenses[i].amount;
    }
  }
  console.log(`Total expense for ${category}: $${total}`);
  return total;
}

// Function to show expenses by month
function showExpensesByMonth(month) {
  let filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() + 1 === month;
  });

  if (filteredExpenses.length === 0) {
    console.log(`No expenses for month ${month}`);
  } else {
    console.log(`Expenses for month ${month}:`);
    filteredExpenses.forEach(expense => {
      console.log(`${expense.date}: ${expense.category} - $${expense.amount}`);
    });
  }
}

// Function to filter expenses above or below a certain amount
function filterExpenses(amountLimit, filterType) {
  let filteredExpenses;
  if (filterType === 'above') {
    filteredExpenses = expenses.filter(expense => expense.amount > amountLimit);
  } else if (filterType === 'below') {
    filteredExpenses = expenses.filter(expense => expense.amount < amountLimit);
  }

  if (filteredExpenses.length === 0) {
    console.log(`No expenses ${filterType} $${amountLimit}`);
  } else {
    console.log(`Expenses ${filterType} $${amountLimit}:`);
    filteredExpenses.forEach(expense => {
      console.log(`${expense.date}: ${expense.category} - $${expense.amount}`);
    });
  }
}


addExpense('2024-11-01', 300, 'Groceries');
addExpense('2024-11-03', 50, 'Entertainment');
addExpense('2024-11-10', 250, 'Rent');
addExpense('2024-10-25', 350, 'University fee');
addExpense('2024-09-05', 100, 'Transport');

calculateCategoryTotal('Groceries');


showExpensesByMonth(11);


filterExpenses(100, 'above');

filterExpenses(100, 'below');
