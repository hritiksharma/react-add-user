import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

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

    if (userName.trim().length === 0 && userAge.length === 0) {
      console.log("Username is empty");
      setError({
        title: "invalid Input",
        message: "Please enter a valid anme and age (non-empty values",
      });
      return;
    }
    if (+userAge < 1) {
      console.log("userAge is less then 1");
      setError({
        title: "invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    const userData = { name: userName, age: userAge };
    props.AddUser(userData);

    setUserName("");
    setUserAge("");
  };
  const handleSubmitError = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          handleSubmit={handleSubmitError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Add Name</label>
          <input
            id="username"
            type="text"
            name="name"
            value={userName}
            onChange={handleAddName}
          />
          <label htmlFor="age">age (Years)</label>
          <input
            id="age"
            type="number"
            name="age"
            value={userAge}
            onChange={handleAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
