import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../App";

const AddTeacher = () => {
  const navigate = useNavigate();

  const { teacherData, setTeacherData } = useContext(dataContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = () => {
    const newData = { name, email, age, department };
    setTeacherData([...teacherData, newData]);
    navigate("/teacher");
  };

  return (
    <div className="add-container">
      <b>Add Teacher Details</b>
      <Box component="form">
        <TextField
          name="name"
          label="Name"
          variant="filled"
          type="text"
          className="text-field"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          name="age"
          label="Age"
          variant="filled"
          type="number"
          className="text-field"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <TextField
          name="email"
          label="Email"
          variant="filled"
          type="email"
          className="text-field"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          name="department"
          label="Department"
          variant="filled"
          type="text"
          className="text-field"
          onChange={(e) => setDepartment(e.target.value)}
        />
        <br />
        <Button
          variant="outlined"
          type="submit"
          color="secondary"
          onClick={() => handleSubmit()}
        >
          Add Details
        </Button>
      </Box>
    </div>
  );
};

export default AddTeacher;
