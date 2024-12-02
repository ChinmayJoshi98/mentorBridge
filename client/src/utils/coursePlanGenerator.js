import { allCourses } from '../data/coursesData';

export const generateCoursePlan = (semestersLeft, interests) => {
  // Filter courses based on user's interests
  const interestedCourses = allCourses.filter(course =>
    interests.includes(course.interest)
  );

  // Shuffle courses to distribute them randomly (optional)
  const shuffledCourses = [...interestedCourses].sort(() => 0.5 - Math.random());

  // Generate semesters
  const plan = [];
  const coursesPerSemester = 3; // Adjust as needed

  for (let i = 0; i < semestersLeft; i++) {
    const semesterCourses = shuffledCourses.slice(
      i * coursesPerSemester,
      (i + 1) * coursesPerSemester
    );

    plan.push({
      semester: `Semester ${i + 1}`,
      courses: semesterCourses,
    });
  }

  return plan;
};