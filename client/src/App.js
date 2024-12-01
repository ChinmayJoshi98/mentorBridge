import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import CourseSelection from './pages/CourseSelection';
import CoursePlan from './pages/CoursePlan';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/course-selection" element={<CourseSelection />} />
                <Route path="/course-plan" element={<CoursePlan />} />
            </Routes>
        </Router>
    );
}

export default App;