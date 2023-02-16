import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpensesData) => {
    const expenseData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [isAddNewExpenseClicked, setIsAddNewExpenseClicked] = useState(false);
  let addNewExpenseButton;
  let expenseForm = <div></div>;

  const addNewExpenseButtonHandler = (event) => {
    setIsAddNewExpenseClicked(true);
  };
  addNewExpenseButton = (
    <button onClick={addNewExpenseButtonHandler}> Add New Expense</button>
  );
  if (isAddNewExpenseClicked) {
    addNewExpenseButton = <div></div>;
    expenseForm = (
      <ExpenseForm
        onCloseExpenseForm={setIsAddNewExpenseClicked}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return (
    <div className="new-expense">
      {addNewExpenseButton}
      {expenseForm}
    </div>
  );
};
export default NewExpense;