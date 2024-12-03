// src/pages/ScheduleMeeting.js

import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Container,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { mentorsData } from '../data/mentorsData';
import { NotificationContext } from '../context/NotificationContext';
import { SnackbarContext } from '../context/SnackbarContext';
import { MeetingContext } from '../context/MeetingContext';

const ScheduleMeeting = () => {
  const { mentorId } = useParams();
  const mentor = mentorsData.find((m) => m.id === parseInt(mentorId));

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [platform, setPlatform] = useState('Google Meet');
  const { addNotification } = useContext(NotificationContext);
  const { showSnackbar } = useContext(SnackbarContext);
  const { addMeeting } = useContext(MeetingContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create meeting object
    const meeting = {
      id: Date.now(),
      mentor: mentor.name,
      mentorId: mentor.id,
      date,
      time,
      platform,
    };

    // Add meeting to context
    addMeeting(meeting);

    // Add a notification
    addNotification({
      id: Date.now(),
      message: `Meeting scheduled with ${mentor.name} on ${date} at ${time}`,
      link: '/calendar',
    });

    // Show success snackbar
    showSnackbar('Meeting requested successfully!', 'success');
  };

  return (
    <Container maxWidth="sm" style={{ paddingTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Schedule Meeting with {mentor.name}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box marginBottom={2}>
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Time"
            type="time"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <FormControl fullWidth>
            <InputLabel id="platform-label">Platform</InputLabel>
            <Select
              labelId="platform-label"
              value={platform}
              label="Platform"
              onChange={(e) => setPlatform(e.target.value)}
            >
              <MenuItem value="Google Meet">Google Meet</MenuItem>
              <MenuItem value="Zoom">Zoom</MenuItem>
              <MenuItem value="Microsoft Teams">Microsoft Teams</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Request Meeting
        </Button>
      </form>
    </Container>
  );
};

export default ScheduleMeeting;