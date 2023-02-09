import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Student from "./Components/Students/Student";
import StudentDetails from "./Components/Students/StudentDetails";
import Teachers from "./Components/Teachers/Teacher";
import TeachersDetails from "./Components/Teachers/TeachersDetails";
import AddStudent from "./Components/Students/AddStudent";
import EditStudent from "./Components/Students/EditStudent";
import AddTeacher from "./Components/Teachers/AddTeacher";
import EditTeacher from "./Components/Teachers/EditTeacher";
import Home from "./Components/Home";
import { useState } from "react";
import { createContext } from "react";

export const dataContext = createContext(null);

function App() {
  const [studentData, seStudentData] = useState([
    {
      name: "sathish",
      age: 20,
      email: "sathish@gmail.com",
      department: "mechanical",
      batch: 1,
      id: "1",
    },
    {
      name: "ram",
      age: 20,
      email: "ram@gmail.com",
      department: "EEE",
      batch: 2,
      id: "2",
    },
    {
      name: "vignesh",
      age: 20,
      email: "vignesh@gmail.com",
      department: "mechanical",
      batch: 3,
      id: "3",
    },
    {
      name: "adithan",
      age: 20,
      email: "adi@gmail.com",
      department: "CSE",
      batch: 2,
      id: "4",
    },
    {
      name: "ajith kumar",
      age: 20,
      email: "ajith@gmail.com",
      department: "civil",
      batch: 2,
      id: "5",
    },
    {
      name: "vijay",
      age: 20,
      email: "vijay@gmail.com",
      department: "ECE",
      batch: 1,
      id: "6",
    },
    {
      name: "abinesh",
      age: 20,
      email: "ram@gmail.com",
      department: "CSE",
      batch: 1,
      id: "7",
    },
    {
      name: "ranjani",
      age: 20,
      email: "ranju@gmail.com",
      department: "CSE",
      batch: 3,
      id: "8",
    },
    {
      name: "veera ragavan",
      age: 20,
      email: "veeramail.com",
      department: "mechanical",
      batch: 3,
      id: "9",
    },
    {
      name: "vinoth",
      age: 20,
      email: "vinoth@gmail.com",
      department: "mechanical",
      batch: 1,
      id: "10",
    },
    {
      name: "Vikram ",
      age: "21",
      email: "vikram@gmail.com",
      department: "EEE",
      batch: 2,
      id: "12",
    },
    {
      name: "Venkatesan",
      age: "20",
      email: "vengatesh@gmail.com",
      department: "EEE",
      batch: 3,
      id: "14",
    },
  ]);

  const [teacherData, setTeacherData] = useState([
    {
      name: "Manju",
      age: 38,
      email: "manju@gmail.com",
      department: "Mechanical",
      id: "1",
    },
    {
      name: "Vasanth",
      age: 35,
      email: "vasanth@gmail.com",
      department: "civil",
      id: "2",
    },
    {
      name: "Ashok",
      age: 38,
      email: "ashok@gmail.com",
      department: "EEE",
      id: "3",
    },
    {
      name: "Thulasi",
      age: 36,
      email: "thuklasi@gmail.com",
      department: "Mechanical",
      id: "4",
    },
    {
      name: "Thirumoorthy",
      age: 38,
      email: "thirumoorthy@gmail.com",
      department: "CSE",
      id: "5",
    },
    {
      name: "Ilango",
      age: 38,
      email: "ilango@gmail.com",
      department: "EEE",
      id: "6",
    },
    {
      name: "Ganesh",
      age: 32,
      email: "ganesh@gmail.com",
      department: "Mechanical",
      id: "7",
    },
    {
      name: "Ilavarasi",
      age: 28,
      email: "ilavarasi@gmail.com",
      department: "Mechanical",
      id: "8",
    },
    {
      name: "Gomathi",
      age: 38,
      email: "gomathi@gmail.com",
      department: "Mechanical",
      id: "9",
    },
    {
      name: "Varun",
      age: 33,
      email: "varub@gmail.com",
      department: "CSE",
      id: "10",
    },
  ]);

  return (
    <dataContext.Provider
      value={{ studentData, seStudentData, teacherData, setTeacherData }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/student"
          element={<Student studentData={studentData} />}
        />
        <Route path="/add/student" element={<AddStudent />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="/edit/student/:id" element={<EditStudent />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/add/teacher" element={<AddTeacher />} />
        <Route path="/edit/teacher/:id" element={<EditTeacher />} />
        <Route path="/teacher/:id" element={<TeachersDetails />} />
      </Routes>
    </dataContext.Provider>
  );
}

export default App;
