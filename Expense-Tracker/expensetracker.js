class ExpenseTracker {
    constructor() {
      this.expenses = [];
    }
  
    addExpense(description, amount) {
      const expense = {
        description: description,
        amount: amount,
        date: new Date(),
      };
      this.expenses.push(expense);
    }
  
    getTotalExpenses() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
  
    getExpensesByMonthYear(month, year) {
      return this.expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getMonth() === month && expenseDate.getFullYear() === year;
      });
    }
  }
  
  const expenseTracker = new ExpenseTracker();
  
 
  expenseTracker.addExpense("Groceries", 50.00);
  expenseTracker.addExpense("Dinner with friends", 30.00);
  expenseTracker.addExpense("Gasoline", 40.00);
  expenseTracker.addExpense("Internet bill", 60.00);
  
  
  const totalExpenses = expenseTracker.getTotalExpenses();
  console.log(`Total expenses: $${totalExpenses.toFixed(2)}`);
  

  const month = 9;
  const year = 2023;
  const expensesForMonth = expenseTracker.getExpensesByMonthYear(month, year);
  console.log(`Expenses for ${month + 1}/${year}:`);
  console.log(expensesForMonth);
  