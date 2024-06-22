import "./ExpenseItem.css";
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
function ExpenseItem(props){
  const month=months[props.date.getMonth()];
  const year=props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;