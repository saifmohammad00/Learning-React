import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [array, setUsers]=useState([]);
  const addUserHandler=(uname,uage)=>{
    setUsers((prevarr)=>{
      return [...prevarr,{name:uname, age:uage, id:Math.random().toString()}];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={array} />
    </div>
  );
}

export default App;
