import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/student/Home";
import CourseList from "./page/student/CourseList";
import CourseDetails from "./page/student/CourseDetails";
import MyEnrollment from "./page/student/MyEnrollment";
import Player from "./page/student/Player";
import Loading from "./components/student/Loading";
import Educator from "./page/educator/Educator";
import AddCourse from "./page/educator/AddCourse";
import Dashboard from "./page/educator/Dashboard";
import MyCourses from "./page/educator/MyCourses";
import StudentsEnrolled from "./page/educator/StudentsEnrolled";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/courselist:input" element={<CourseList />} />
        <Route path="/coursedetail/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollment />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="My-courses" element={<MyCourses />} />
          <Route path="students-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
