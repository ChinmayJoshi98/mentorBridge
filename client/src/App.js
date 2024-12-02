import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import CourseSelectionLanding from './pages/courseSelection/CourseSelectionLanding';
import CourseSelection from './pages/CourseSelection';
import { PlannerProvider } from './context/PlannerContext';
import ResumeReview from './pages/ResumeReview';
import UploadResume from './pages/UploadResume';
import JobInterests from './pages/JobInterests';
import ResumeMentorRecommendations from './pages/ResumeMentorRecommendations';
import ResumeFeedback from './pages/ResumeFeedback';
import { NotificationProvider } from './context/NotificationContext';

function App() {
    const currentResume = {
        name: 'My_Resume.pdf',
        url: '/path/to/My_Resume.pdf',
      };
      const resumeScore = 85;
    return (
        <NotificationProvider>
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
                            <Route path="*" element={<Navigate to="/dashboard" replace />} />
                            {/* Resume Review Routes */}
                            <Route path="/resume-review" element={<ResumeReview currentResume={currentResume} resumeScore={resumeScore} />} />
                            <Route path="/resume-review/upload" element={<UploadResume />} />
                            <Route path="/resume-review/job-interests" element={<JobInterests />} />
                            <Route path="/resume-review/recommended-mentors" element={<ResumeMentorRecommendations />} />
                            <Route path="/resume-review/feedback" element={<ResumeFeedback />} />
                        </Route>
                    </Routes>
                </Router>
            </PlannerProvider>
        </NotificationProvider>
    );
}

export default App;