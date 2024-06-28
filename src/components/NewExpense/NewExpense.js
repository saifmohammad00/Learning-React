import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const abc=(data)=>{
    const newData={...data,id:Math.random().toString()};
    props.appData(newData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDataMock={abc}/>
    </div>
  );
};

export default NewExpense;