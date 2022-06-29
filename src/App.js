import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [allUsers, setAllUsers] = useState([]);

  const handleAddUser = (userData) => {
    const newData = {
      ...userData,
      id: Math.random().toString(),
    };
    setAllUsers((prevUsers) => {
      return [newData, ...prevUsers];
    });
    console.log("userData ------------", userData);
  };
  console.log("allUsers ------------", allUsers);

  return (
    <div className="App">
      React Add User
      <AddUser AddUser={handleAddUser} />
      <UserList users={allUsers} />
    </div>
  );
}

export default App;
