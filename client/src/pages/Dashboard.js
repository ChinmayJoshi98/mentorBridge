// src/pages/Dashboard.js

import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import ProgressOverview from '../components/ProgressOverview';
import UpcomingSessions from '../components/UpcomingSessions';
import ResourcesTips from '../components/ResourcesTips';
import { PlannerContext } from '../context/PlannerContext';

const Dashboard = () => {
  const resumeScore = 85;
  const currentCourses = {
    semester: 'Fall 2023',
    courses: [
      'Data Structures',
      'Algorithms',
      'Operating Systems',
      'Database Systems',
    ],
  };
  const resources = [
    { title: 'How to Ace Interviews?', author: 'Mentor X' },
    { title: 'Top Courses for Data Science', author: 'Mentor Y' },
    { title: 'Resume Writing Guidelines', author: 'Mentor Z' },
  ];

  const currentMentor = {
    id: 1,
    name: 'Alice Johnson',
    profilePic: '/assets/mentors/alice.jpg',
    interests: ['Data Science', 'Machine Learning', 'Artificial Intelligence'],
  };

  const { plannerCourses } = useContext(PlannerContext);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3} alignItems="stretch">
        {/* Progress Overview */}
        <Grid item xs={12}>
          <ProgressOverview
            resumeScore={resumeScore}
            currentCourses={currentCourses}
            plannerCourses={plannerCourses}
            currentMentor={currentMentor}
          />
        </Grid>

        {/* Upcoming Sessions */}
        <Grid item xs={12} md={6}>
          <UpcomingSessions />
        </Grid>

        {/* Resources & Tips */}
        <Grid item xs={12} md={6}>
          <ResourcesTips resources={resources} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;