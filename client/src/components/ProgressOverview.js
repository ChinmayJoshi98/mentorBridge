import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import ProgressCard from './ProgressCard';
import PlannerSummaryCard from './PlannerSummaryCard';
import CurrentMentorCard from './CurrentMentorCard';
import { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { Link } from 'react-router-dom'; // Import Link from React Router

const ProgressOverview = ({ currentCourses, plannerCourses, currentMentor }) => {
  const { resumeScore, hasNewResumeScore } = useContext(ResumeContext);

  return (
    <Paper
      sx={{
        padding: 3,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        marginBottom: 4,
        paddingBottom: 5,
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 3, color: '#393E46', textAlign: 'center' }}
        >
          Progress Overview
        </Typography>
        <Grid container spacing={3} alignItems="stretch">
          {/* Resume Score */}
          <Grid item xs={12} sm={6} md={3}>
            <ProgressCard
              title="Latest Resume Score"
              value={resumeScore || 0}
              image="/assets/dashboard/resume_score.png"
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
              value={currentCourses.semester || 'N/A'}
              image="/assets/dashboard/current_courses.png"
              color="#8E24AA"
              progressType="list"
              listItems={currentCourses.courses || []}
            />
          </Grid>

          {/* Planner Summary */}
          <Grid item xs={12} sm={6} md={3} style={{ maxHeight: '395px' }}>
            <Link to="/planner-summary" style={{ textDecoration: 'none' }}>
              <PlannerSummaryCard
                plannerCourses={plannerCourses || []}
                image="/assets/dashboard/planner_summary.png"
              />
            </Link>
          </Grid>

          {/* Current Mentor */}
          <Grid item xs={12} sm={6} md={3} style={{ maxHeight: '395px' }}>
            <CurrentMentorCard
              mentor={currentMentor}
              image="/assets/dashboard/current_mentor.png"
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProgressOverview;