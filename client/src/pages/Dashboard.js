import React from 'react';
import { Box, Grid } from '@mui/material';
import ProgressOverview from '../components/ProgressOverview';
import UpcomingSessions from '../components/UpcomingSessions';
import ResourcesTips from '../components/ResourceTips';

const Dashboard = () => {

  const upcomingSessions = [
    { mentor: 'John Doe', date: 'Dec 6', time: '10:00 AM - 11:00 AM' },
    { mentor: 'Jane Smith', date: 'Dec 8', time: '2:00 PM - 3:00 PM' },
  ];

  const resources = [
    '"How to Ace Interviews?" by Mentor X',
    '"Top Courses for Data Science"',
    '"Resume Writing Guidelines"',
  ];

  const currentCourses = {
    semester: 'Fall 2024',
    courses: [
      'Data Structures',
      'Algorithms',
      'Operating Systems',
      'Database Systems',
    ],
  };

  const resumeScore = 85;
  const projectsCompleted = 3;
  const completedSessions = 4;


  return (
    <Box>
      <Grid container spacing={3}>
        {/* Progress Overview */}
        <Grid item xs={12}>
          <ProgressOverview
            resumeScore={resumeScore}
            currentCourses={currentCourses}
            projectsCompleted={projectsCompleted}
            completedSessions={completedSessions}
          />
        </Grid>

        {/* Upcoming Sessions */}
        <Grid item xs={12} md={6}>
          <UpcomingSessions upcomingSessions={upcomingSessions} />
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