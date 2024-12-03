// src/components/MentorCard.js

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardActionArea,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ChatWindow from '../courseSelection/ChatWindow';

const MentorCard = ({ mentor, showHelpedCount }) => {
  const navigate = useNavigate();
  const [chatMentor, setChatMentor] = useState(null);

  const handleChatClick = () => {
    setChatMentor(mentor);
  };

  const handleRequestMeetingClick = () => {
    navigate(`/schedule-meeting/${mentor.id}`);
  };

  return (
    <Card
      sx={{
        '&:hover': { boxShadow: 6 },
        borderRadius: 2,
        maxWidth: 300, // Adjusted card width
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            position: 'relative',
            height: '150px', // Reduced height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            image={mentor.profilePic}
            alt={`${mentor.name}'s profile`}
            sx={{
              maxWidth: '120px', // Adjusted image width
              maxHeight: '100%', // Ensure the image scales properly
              objectFit: 'contain', // Prevent distortion
              borderRadius: '50%', // Add rounded profile image effect
            }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" fontWeight="bold">
            {mentor.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {mentor.role} at {mentor.company}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            <strong>Interests:</strong> {mentor.interests.join(', ')}
          </Typography>
          {showHelpedCount && (
            <Typography variant="body2" color="text.secondary">
              Helped {mentor.helpedCount} aspirants crack {mentor.company} {mentor.role}{' '}
              interviews
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          justifyContent: 'space-between',
          padding: '16px',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <Button
          size="small"
          onClick={handleChatClick}
          startIcon={<ChatIcon />}
          sx={{ color: '#1565c0', fontWeight: 'bold' }}
        >
          Chat
        </Button>
        <Button
          size="small"
          onClick={handleRequestMeetingClick}
          startIcon={<ScheduleIcon />}
          sx={{ color: '#1565c0', fontWeight: 'bold' }}
        >
          Request Meeting
        </Button>
      </CardActions>
      {/* Chat Window */}
      {chatMentor && (
        <ChatWindow mentor={chatMentor} onClose={() => setChatMentor(null)} />
      )}
    </Card>
  );
};

export default MentorCard;