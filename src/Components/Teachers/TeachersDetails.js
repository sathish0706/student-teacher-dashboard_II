import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { dataContext } from "../../App";

const TeachersDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { teacherData } = useContext(dataContext);

  const handleDelete = async () => {
    teacherData.splice(id - 1, 1);
    navigate("/teacher");
  };

  return (
    <>
      <h1 id="headline">Teachers Details</h1>
      <div className="student-detail-container">
        <h1>Name: {teacherData[id - 1].name}</h1>
        <h1>Age: {teacherData[id - 1].age}</h1>
        <h1>Email: {teacherData[id - 1].email}</h1>
        <h1>Department: {teacherData[id - 1].department}</h1>
        <div id="action">
          <Button
            variant="contained"
            onClick={() => navigate(`/edit/teacher/${teacherData[id - 1].id}`)}
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

export default TeachersDetails;
