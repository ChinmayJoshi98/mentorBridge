import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import CourseSelectionLanding from './pages/courseSelection/CourseSelectionLanding';
import CourseSelection from './pages/CourseSelection';
import { PlannerProvider } from './context/PlannerContext';

function App() {
    return (
        <PlannerProvider>
            <Router>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />

                    {/* Protected Routes with Layout */}
                    <Route element={<AppLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/course-selection" element={<CourseSelectionLanding />} />
                        <Route path="/course-selection/plan" element={<CourseSelection />} />
                        {/* Add other routes as needed */}
                        {/* Redirect any unmatched routes to /dashboard */}
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    </Route>
                </Routes>
            </Router>
        </PlannerProvider>
        
    );
}

export default App;