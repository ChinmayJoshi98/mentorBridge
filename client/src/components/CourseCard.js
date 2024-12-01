import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '10px',
            backgroundColor: '#fff',
        }}>
            <h2>{course.course_name}</h2>
            <p>{course.description}</p>
            <p>Credits: {course.credits}</p>
            <p>Difficulty: {course.difficulty}</p>
        </div>
    );
};

export default CourseCard;
