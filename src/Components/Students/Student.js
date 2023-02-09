import React, { useContext } from "react";
import "./students.css";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../App";

function Student() {
  const navigate = useNavigate();

  const { studentData } = useContext(dataContext);

  console.log(studentData);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Students Name</h1>
      <h3 id="h3">Click the button and see student details</h3>
      {studentData
        ? studentData.map((student, i) => (
            <button
              key={i}
              className="button"
              onClick={() => navigate(`/student/${student.id}`)}
            >
              {student.name}
            </button>
          ))
        : "Loading"}
    </div>
  );
}

export default Student;
