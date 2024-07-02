function AddUser(){
    function addUserHandler(event){
      event.preventDefault();
    }
    return <form onSubmit="addUserHandler">
      <label htmlFor="username">Username</label>
      <input id="username"/>
      <label htmlFor="age">Age</label>
      <input id="age"/>
      <button type="submit">Add User</button>
    </form>
  }
  export default AddUser;