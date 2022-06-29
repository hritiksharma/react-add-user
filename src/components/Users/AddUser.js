import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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

    if (userName.length === 0) {
      console.log("Username is empty");
      if (isOpen) {
        console.log("inside isOpen");
        <ErrorModel
          content={<> UserName is Empty </>}
          handleclose={togglePopup}
        />;
      }
      return;
    }
    const userData = { name: userName, age: userAge };
    props.AddUser(userData);

    setUserName("");
    setUserAge("");
  };

  return (
    <>
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
    </>
  );
};

export default AddUser;
