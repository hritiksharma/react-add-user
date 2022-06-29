import React, { useState } from "react";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const handleAddName = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
  };
  const handleAge = (event) => {
    console.log(event.target.value);
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = { name: userName, age: userAge };
    props.AddUser(userData);

    setUserName("");
    setUserAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Add Name</label>
        <input
          id="username"
          type="text"
          name="name"
          value={userName}
          onChange={handleAddName}
        />
      </div>
      <div>
        <label htmlFor="age">age (Years)</label>
        <input
          id="age"
          type="number"
          name="age"
          value={userAge}
          onChange={handleAge}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
