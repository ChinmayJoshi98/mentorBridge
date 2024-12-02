import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StarsIcon from '@mui/icons-material/Stars';
import ProgressCard from './ProgressCard';

const ProgressOverview = ({
  resumeScore,
  currentCourses,
  projectsCompleted,
  completedSessions,
}) => (
  <Paper
    sx={{
      padding: 4,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Typography
      variant="h5"
      fontWeight="bold"
      sx={{ mb: 3, color: '#393E46' }}
    >
      Progress Overview
    </Typography>
    <Grid container spacing={3}>
      {/* Resume Score */}
      <Grid item xs={12} sm={6} md={3}>
        <ProgressCard
          title="Resume Score"
          value={resumeScore}
          icon={<AssignmentIcon sx={{ fontSize: 40, color: '#00ACC1' }} />}
          color="#00ACC1"
          progressType="circular"
        />
      </Grid>

      {/* Current Courses */}
      <Grid item xs={12} sm={6} md={3}>
        <ProgressCard
          title="Current Courses"
          value={currentCourses.semester}
          icon={<AssignmentIcon sx={{ fontSize: 40, color: '#8E24AA' }} />}
          color="#8E24AA"
          progressType="list"
          listItems={currentCourses.courses}
        />
      </Grid>

      {/* Projects Completed */}
      <Grid item xs={12} sm={6} md={3}>
        <ProgressCard
          title="Projects Completed"
          value={projectsCompleted}
          icon={<StarsIcon sx={{ fontSize: 40, color: '#43A047' }} />}
          color="#43A047"
          progressType="number"
        />
      </Grid>

      {/* Completed Sessions */}
      <Grid item xs={12} sm={6} md={3}>
        <ProgressCard
          title="Completed Sessions"
          value={completedSessions}
          icon={<EventNoteIcon sx={{ fontSize: 40, color: '#4880FF' }} />}
          color="#4880FF"
          progressType="number"
        />
      </Grid>
    </Grid>
  </Paper>
);

export default ProgressOverview;