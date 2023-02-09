import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./students.css";
import Button from "@mui/material/Button";
import { dataContext } from "../../App";
import { useContext } from "react";

const StudentDetails = () => {
  const { studentData } = useContext(dataContext);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    studentData.splice(id - 1, 1);
    navigate("/student");
  };

  return (
    <>
      <h1 id="headline">Students Details</h1>
      <div className="student-detail-container">
        <h1>Name: {studentData[id - 1].name}</h1>
        <h1>Age: {studentData[id - 1].age}</h1>
        <h1>Email: {studentData[id - 1].email}</h1>
        <h1>Department: {studentData[id - 1].department}</h1>
        <div id="action">
          <Button
            variant="contained"
            onClick={() => navigate(`/edit/student/${studentData[id - 1].id}`)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
