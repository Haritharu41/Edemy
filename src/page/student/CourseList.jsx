import React, { useContext, useEffect,useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";

function CourseList() {
  const { navigate, allcourse } = useContext(AppContext);
  const { input } = useParams();

  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allcourse && allcourse.length > 0) {
      const tempCourses = allcourse.slice();

      input
        ? setFilteredCourse(
            tempCourses.filter(item =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourse(tempCourses);
    }
  }, [input, allcourse]);

  return (
    <div>
      <>
        <div className="relative md:px-36 px-8 pt-20 text-left">
          <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
            <div>
              <h1 className="text-4xl font-semibold text-gray-800">
                Course List
              </h1>
              <p className="text-gray-500">
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </span>
                / <span>Course List</span>
              </p>
            </div>
            <SearchBar data={input} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:px-0 ">
            {filteredCourse.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default CourseList;
