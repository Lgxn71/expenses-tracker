import React, { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const saveExpenseFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onSaveExpenseFilter={saveExpenseFilter}
          />
          <ExpenseChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    </li>
  );
};
export default Expenses;
