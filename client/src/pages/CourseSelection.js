import React, { useState, useEffect } from 'react';
import { fetchCourses } from '../services/api';

const CourseSelection = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            try {
                const data = await fetchCourses();
                setCourses(data);
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            }
        };

        getCourses();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Course Selection</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <h2>{course.course_name}</h2>
                        <p>{course.description}</p>
                        <p>Credits: {course.credits}</p>
                        <p>Difficulty: {course.difficulty}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseSelection;
