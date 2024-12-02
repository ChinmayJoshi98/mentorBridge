import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ProgressCard from './ProgressCard';
import PlannerSummaryCard from './PlannerSummaryCard';
import CurrentMentorCard from './CurrentMentorCard';
import { Link as RouterLink } from 'react-router-dom';
import { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const ProgressOverview = ({
  currentCourses,
  plannerCourses,
  currentMentor,
}) => {
  const { resumeScore, hasNewResumeScore } = useContext(ResumeContext);

  return (
    <Paper
      sx={{
        padding: 3,
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
      <Grid container spacing={2}>
        {/* Resume Score */}
        <Grid item xs={12} sm={6} md={3}>
          <ProgressCard
            title="Latest Resume Score"
            value={resumeScore}
            icon={<AssignmentIcon sx={{ fontSize: 40, color: '#00ACC1' }} />}
            color="#00ACC1"
            progressType="circular"
            link="/resume-review/feedback"
            flash={hasNewResumeScore}
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

        {/* Planner Summary */}
        <Grid item xs={12} sm={6} md={3}>
          <PlannerSummaryCard plannerCourses={plannerCourses} />
        </Grid>

        {/* Current Mentor */}
        <Grid item xs={12} sm={6} md={3}>
          <CurrentMentorCard mentor={currentMentor} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProgressOverview;