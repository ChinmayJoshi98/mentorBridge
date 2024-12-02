import React, { useContext, useEffect } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ResumeContext } from '../context/ResumeContext';

const ResumeFeedback = () => {
  const location = useLocation();
  const { mentor } = location.state || {};

  const defaultFeedback = [
    'Great structure in your resume.',
    'Consider adding more projects related to your job interest.',
    'Highlight your technical skills more prominently.',
  ];

  const { updateResumeScore } = useContext(ResumeContext);

  const resumeScore = Math.floor(Math.random() * 21) + 80;

  useEffect(() => {
    updateResumeScore(resumeScore);
  }, [resumeScore, updateResumeScore]);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper
        sx={{
          padding: 4,
          borderRadius: 4,
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          Resume Feedback
        </Typography>
        <Typography variant="h2" color="primary" fontWeight="bold" sx={{ mb: 2 }}>
          {resumeScore}%
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Feedback from {mentor?.name || 'Your Mentor'}
        </Typography>
        <List>
          {(mentor?.feedback || defaultFeedback).map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ResumeFeedback;