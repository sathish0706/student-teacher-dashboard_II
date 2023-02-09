import React, { useContext } from "react";
// import Button from "@mui/material/Button";
// import "./students.css";
// import { textAlign } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../App";

function Teachers() {
  const navigate = useNavigate();
  const { teacherData } = useContext(dataContext);
  // const [Loading, setLoading] = useState(false);
  console.log("data:", teacherData);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Teachers Name</h1>
      <h3 id="h3">Click the button and see Teachers details</h3>
      {teacherData
        ? teacherData.map((teacher, i) => (
            <button
              key={i}
              className="button"
              onClick={() => navigate(`/teacher/${teacher.id}`)}
            >
              {teacher.name}
            </button>
          ))
        : ""}
    </div>
  );
}

export default Teachers;
