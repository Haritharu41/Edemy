import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/student/Home";
import CourseList from "./page/student/CourseList";
import CourseDetails from "./page/student/CourseDetails";
import MyEnrollment from "./page/student/MyEnrollment";
import Player from "./page/student/Player";
import Loading from "./components/student/Loading";

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
      </Routes>
    </div>
  );
}

export default App;
