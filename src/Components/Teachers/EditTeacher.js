import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { dataContext } from "../../App";

const EditStudent = () => {
  const { id } = useParams();

  const { teacherData, setTeacherData } = useContext(dataContext);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: teacherData[id - 1].name,
      age: teacherData[id - 1].age,
      email: teacherData[id - 1].email,
      department: teacherData[id - 1].department,
    },
    onSubmit: () => {
      let newData = formik.values;
      setTeacherData(newData);
    },
  });
  console.log(formik.values);

  return teacherData ? (
    <div className="add-container">
      <b>Add Teacher Details</b>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField
          name="name"
          label="Name"
          variant="filled"
          type="text"
          className="text-field"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <TextField
          name="age"
          label="Age"
          variant="filled"
          type="number"
          className="text-field"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <br />
        <TextField
          id="email"
          label="Email"
          variant="filled"
          type="email"
          className="text-field"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <TextField
          name="department"
          id="department"
          label="Department"
          variant="filled"
          type="text"
          className="text-field"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.department}
        />
        <br />
        <Button
          variant="outlined"
          type="submit"
          color="success"
          onClick={() => navigate("/teacher")}
        >
          Edit Details
        </Button>
      </Box>
    </div>
  ) : (
    ""
  );
};

export default EditStudent;
