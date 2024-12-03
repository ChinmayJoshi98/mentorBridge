// src/pages/PopularMentors.js

import React from 'react';
import { Typography, Grid } from '@mui/material';
import MentorCard from '../pages/interviewPreparation/MentorCard';
import { mentorsData } from '../data/mentorsData'; // Corrected import

const PopularMentors = () => {
  // Assuming you have a 'helpedCount' or similar property
  const popularMentors = mentorsData.filter((mentor) => mentor.helpedCount > 5);

  return (
    <div style={{ padding: '20px', flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Popular Mentors
      </Typography>
      {popularMentors.length > 0 ? (
        <Grid container spacing={4}>
          {popularMentors.map((mentor) => (
            <Grid item xs={12} sm={6} md={4} key={mentor.id}>
              <MentorCard mentor={mentor} showHelpedCount />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1">
          No popular mentors found at the moment.
        </Typography>
      )}
    </div>
  );
};

export default PopularMentors;