import React, { useEffect, useState, useContext } from 'react';
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
import { mentorsData } from '../data/mentorsData';
import ChatWindow from '../pages/courseSelection/ChatWindow';
import { NotificationContext } from '../context/NotificationContext';
import { SnackbarContext } from '../context/SnackbarContext';

const ResumeMentorRecommendations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedJobs = location.state?.selectedJobs || [];
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [chatMentor, setChatMentor] = useState(null);
  const [requestedMentors, setRequestedMentors] = useState([]);

  const { addNotification } = useContext(NotificationContext);
  const { showSnackbar } = useContext(SnackbarContext);

  useEffect(() => {
    // Filter mentors based on job roles
    const mentors = mentorsData.filter((mentor) =>
      mentor.expertise.some((expertise) => selectedJobs.includes(expertise))
    );
    setFilteredMentors(mentors);
  }, [selectedJobs]);

  const handleConnect = (mentor) => {
    setChatMentor(mentor);
  };

  const handleRequestReview = (mentor) => {
    // Add mentor ID to requestedMentors
    setRequestedMentors((prev) => [...prev, mentor.id]);

    // Show snackbar notification
    showSnackbar('Resume review request sent', 'success');

    // Simulate delay and generate notification
    setTimeout(() => {
      // Generate unique ID for notification
      const notificationId = Date.now();
      addNotification({
        id: notificationId,
        message: 'Your resume has been reviewed, click for results',
        link: '/resume-review/feedback',
        mentor: {
          name: mentor.name,
          feedback: [
            'Your resume is well-structured.',
            'Consider adding more details about your recent projects.',
            'Emphasize your leadership experiences.',
          ],
        },
      });
    }, 5000);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Recommended Mentors
      </Typography>
      <Grid container spacing={2}>
        {filteredMentors.map((mentor) => (
          <Grid item xs={12} sm={6} md={4} key={mentor.id}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar src={mentor.profilePic} alt={mentor.name}>
                    {mentor.name[0]}
                  </Avatar>
                }
                title={mentor.name}
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
                  variant={
                    requestedMentors.includes(mentor.id) ? 'contained' : 'outlined'
                  }
                  size="small"
                  onClick={() => handleRequestReview(mentor)}
                  disabled={requestedMentors.includes(mentor.id)}
                >
                  {requestedMentors.includes(mentor.id)
                    ? 'Request Sent'
                    : 'Request Resume Review'}
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

export default ResumeMentorRecommendations;