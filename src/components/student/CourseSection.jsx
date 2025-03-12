import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";



function CourseSection() {
  const { allcourse } = useContext(AppContext);

  return (
    <div>
      <h2 className="py-16 md:px-40 px-8">Learn from the best</h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our coursess are crafted to deliver
        results.
      </p>

      <div className="grid grid-cols-hari px-4 md:px-0 md:my-16 my-10 gap-4 ">
        {
          allcourse.slice(0,4).map((course, index)=><CourseCard key={index} course={course}/>)
        }
      </div>
       
      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show all courses
      </Link>
    </div>
  );
}

export default CourseSection;
