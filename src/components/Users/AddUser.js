import React,{useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {
  const [enteredUser, setUserName]=useState("");
  const [enteredAge, setAge]=useState("");
  const handleUserNameChange=(e)=>{
    setUserName(e.target.value);
  }
  const handleAgeChange=(e)=>{
    setAge(e.target.value);
  }
  
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUser,enteredAge);
    event.target.reset();
  };
  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={handleUserNameChange}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={handleAgeChange}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;