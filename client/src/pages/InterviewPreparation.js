// src/pages/InterviewPreparation.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Box,
  Button,
} from '@mui/material';

const InterviewPreparation = () => {
  const navigate = useNavigate();

  const handleInterviewComingUpClick = () => {
    navigate('/interview-preparation/interview-form');
  };

  const handlePopularMentorsClick = () => {
    navigate('/interview-preparation/popular-mentors');
  };

  return (
    <Box
      sx={{
        padding: '40px 20px',
        flexGrow: 1,
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{ color: '#1565c0' }}
      >
        Interview Preparation
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ marginBottom: '40px', color: '#6b6b6b' }}
      >
        Boost your preparation with personalized mentor guidance and resources.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Card 1: Upcoming Interview */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 4,
              '&:hover': { boxShadow: 6 },
            }}
          >
            <CardActionArea onClick={handleInterviewComingUpClick}>
              <Box
                sx={{
                  position: 'relative',
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#e3f2fd', // Subtle background color
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                }}
              >
                <CardMedia
                  component="img"
                  image="/assets/interview.png"
                  alt="Upcoming Interview"
                  sx={{
                    maxWidth: '150px',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Do you have an interview coming up?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get personalized mentor recommendations based on your upcoming interviews.
                </Typography>
              </CardContent>
              <Box sx={{ textAlign: 'center', paddingBottom: 2 }}>
                <Button variant="contained" color="primary" size="small">
                  Get Help
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Card 2: Popular Mentors */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 4,
              '&:hover': { boxShadow: 6 },
            }}
          >
            <CardActionArea onClick={handlePopularMentorsClick}>
              <Box
                sx={{
                  position: 'relative',
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ede7f6', // Subtle background color
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                }}
              >
                <CardMedia
                  component="img"
                  image="/assets/popular_mentors.png"
                  alt="Popular Mentors"
                  sx={{
                    maxWidth: '400px',
                    maxHeight: '100%',
                    //objectFit: 'contain',
                  }}
                />
              </Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Popular mentors for interview preparation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  See our top mentors who have helped others succeed in interviews.
                </Typography>
              </CardContent>
              <Box sx={{ textAlign: 'center', paddingBottom: 2 }}>
                <Button variant="contained" color="primary" size="small">
                  Discover
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InterviewPreparation;