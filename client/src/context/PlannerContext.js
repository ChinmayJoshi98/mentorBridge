import React, { createContext, useState } from 'react';

export const PlannerContext = createContext();

export const PlannerProvider = ({ children }) => {
  const [plannerCourses, setPlannerCourses] = useState([]);

  const addCourse = (course) => {
    setPlannerCourses((prevCourses) => [...prevCourses, course]);
  };

  const removeCourse = (courseName) => {
    setPlannerCourses((prevCourses) =>
      prevCourses.filter((course) => course.name !== courseName)
    );
  };

  return (
    <PlannerContext.Provider
      value={{ plannerCourses, addCourse, removeCourse }}
    >
      {children}
    </PlannerContext.Provider>
  );
};
