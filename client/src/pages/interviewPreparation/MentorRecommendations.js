// src/pages/interviewPreparation/MentorRecommendations.js

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Chip,
  Avatar,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { mentorsData } from '../../data/mentorsData';
import ChatWindow from '../courseSelection/ChatWindow'; // Adjust the path if necessary

const MentorRecommendations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { company, role } = location.state || {};
  const [chatMentor, setChatMentor] = useState(null);

  // Filter mentors based on company or role
  const recommendedMentors = mentorsData.filter(
    (mentor) =>
      mentor.company.toLowerCase() === company.toLowerCase() ||
      mentor.expertise.includes(role)
  );

  const handleConnect = (mentor) => {
    setChatMentor(mentor);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Recommended Mentors
      </Typography>
      <Grid container spacing={2}>
        {recommendedMentors.map((mentor) => (
          <Grid item xs={12} sm={6} md={4} key={mentor.id}>
            <Card sx={{ '&:hover': { boxShadow: 6 } }}>
              <CardHeader
                avatar={
                  <Avatar src={mentor.profilePic} alt={mentor.name}>
                    {mentor.name[0]}
                  </Avatar>
                }
                title={mentor.name}
                subheader={`${mentor.role} at ${mentor.company}`}
              />
              <CardContent>
                <Box sx={{ mb: 1 }}>
                  {mentor.expertise.map((expertise, index) => (
                    <Chip label={expertise} key={index} sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ mr: 1 }}
                  onClick={() => handleConnect(mentor)}
                >
                  Connect
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate(`/schedule-meeting/${mentor.id}`)}
                >
                  Request Meeting
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Chat Window */}
      {chatMentor && (
        <ChatWindow mentor={chatMentor} onClose={() => setChatMentor(null)} />
      )}
    </Box>
  );
};

export default MentorRecommendations;