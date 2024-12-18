// src/App.js

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
import { ResumeProvider } from './context/ResumeContext';
import { SnackbarProvider } from './context/SnackbarContext';

// Import new components
import InterviewPreparation from './pages/InterviewPreparation';
import InterviewForm from './pages/InterviewForm';
import MentorRecommendations from './pages/interviewPreparation/MentorRecommendations'; // Adjusted path
import PopularMentors from './pages/PopularMentors';
import ScheduleMeeting from './pages/ScheduleMeeting';
import CalendarPage from './pages/CalendarPage';
import ChatWindow from './pages/courseSelection/ChatWindow';
import { MeetingProvider } from './context/MeetingContext';
import PlannerSummaryPage from './pages/PlannerSummaryPage';

function App() {
  const currentResume = {
    name: 'My_Resume.pdf',
    url: '/path/to/My_Resume.pdf',
  };
  const resumeScore = 85;
  return (
    <MeetingProvider>
      <SnackbarProvider>
        <PlannerProvider>
          <NotificationProvider>
            <ResumeProvider>
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
                    {/* Resume Review Routes */}
                    <Route
                      path="/resume-review"
                      element={
                        <ResumeReview currentResume={currentResume} resumeScore={resumeScore} />
                      }
                    />
                    <Route path="/resume-review/upload" element={<UploadResume />} />
                    <Route path="/resume-review/job-interests" element={<JobInterests />} />
                    <Route
                      path="/resume-review/recommended-mentors"
                      element={<ResumeMentorRecommendations />}
                    />
                    <Route path="/resume-review/feedback" element={<ResumeFeedback />} />

                    {/* Interview Preparation Routes */}
                    <Route
                      path="/interview-preparation"
                      element={<InterviewPreparation />}
                    />
                    <Route
                      path="/interview-preparation/interview-form"
                      element={<InterviewForm />}
                    />
                    <Route
                      path="/interview-preparation/mentor-recommendations"
                      element={<MentorRecommendations />}
                    />
                    <Route
                      path="/interview-preparation/popular-mentors"
                      element={<PopularMentors />}
                    />
                    <Route path="/schedule-meeting/:mentorId" element={<ScheduleMeeting />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/chat/:mentorId" element={<ChatWindow />} />

                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/planner-summary" element={<PlannerSummaryPage />} />
                  </Route>
                </Routes>
              </Router>
            </ResumeProvider>
          </NotificationProvider>
        </PlannerProvider>
      </SnackbarProvider>
    </MeetingProvider>
    
  );
}

export default App;