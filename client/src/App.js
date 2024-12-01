import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseSelection from './pages/CourseSelection';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/course-selection" element={<CourseSelection />} />
            </Routes>
        </Router>
    );
}

export default App;
