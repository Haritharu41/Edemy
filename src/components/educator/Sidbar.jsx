import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";

function Sidbar() {

 const {isEducator}=useContext(AppContext);


  const menuItems = [
    { name: "Dashboard", path: "/educator", icon: assets.home_icon },

    {
      name: "Add Course",
      path: "/educator/add-course",
      icon: assets.add_icon,
    },
    { name: "My Course", path: "/educator/my-course", icon: assets.my_course_icon },
    {
      name: "Student Enrolled",
      path: "/educator/student-enrolled",
      icon: assets.person_tick_icon,
    },
  ];

  return isEducator && (
    <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col   ">
    {menuItems.map((item)=>(
      <NavLink className={({isActive})=>`flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-8 gap-3 ${isActive ? 'bg-indigo-50 border-r-[6px] border-indigo-500/90' : 'hover:bg-gray-100/90 '}`}
      to={item.path}
      key={item.name}
      end={item.path === '/educator'} 
      >
        <img src={item.icon} alt="" className="w-6 h-6" />
        <p className="md:block hidden text-center px-4">{item.name}</p>
      </NavLink>
    ))}
    </div>
  );
}

export default Sidbar;
