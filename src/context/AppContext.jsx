import React, { useEffect } from "react";
import { createContext } from "react";
import { dummyCourses } from "../assets/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (propes) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();

  const [allcourse, setAllcourses] = useState([]);
const [isEducator, setIsEducator] = useState(true)

  // Fetching all courses
  const fetchAllCourses = async () => {
    setAllcourses(dummyCourses);
  };


  //Fuction to calculate the average rating of course
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };


  // Fuction to Calculate Course chapter Time
  const calculateChpapterTime=(chapter)=>{
    let time=0
    chapter.chapterContent.map((lecture)=> time+=lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000, {unitss: ["h","m"]})
  }

  // Fuction to Calculate Course Duration
  const calculateCourseDuration=(course)=>{
    let time=0
    course.courseContent.map((chapter)=>chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration))
    return humanizeDuration(time * 60 * 1000, {units: ["h","m"]})

  }


  // Fuction calculate to No of Lectures in the course

  const calculateNoOfLectures=(course)=>{
    
    let totalLectures=0
    course.courseContent.forEach(chapter=>{
      if(Array.isArray(chapter.chapterContent)){
        totalLectures+=chapter.chapterContent.length;
      }

    })
    return totalLectures;
  }


  // UseEffect
  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allcourse,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateChpapterTime,
    calculateCourseDuration,
    calculateNoOfLectures
  };
  return (
    <AppContext.Provider value={value}>{propes.children}</AppContext.Provider>
  );
};
