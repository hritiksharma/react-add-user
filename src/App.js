import "./App.css";
import AddUser from "./components/Users/AddUser";
function App() {
  const handleAddUser = (userData) => {
    console.log(userData);
  };

  return (
    <div className="App">
      React Add User
      <AddUser AddUser={handleAddUser} />
    </div>
  );
}

export default App;
