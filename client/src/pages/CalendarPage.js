// src/pages/CalendarPage.js

import React, { useContext, useState } from 'react';
import {
  Typography,
  Container,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MeetingContext } from '../context/MeetingContext';
import EventIcon from '@mui/icons-material/Event';
import { format } from 'date-fns';
import '../styles/Calendar.css';

const CalendarPage = () => {
  const { meetings } = useContext(MeetingContext);
  const [date, setDate] = useState(new Date());

  // Function to add a class to dates with meetings
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = format(date, 'yyyy-MM-dd');
      const meetingDates = meetings.map((meeting) => meeting.date);
      if (meetingDates.includes(formattedDate)) {
        return 'meeting-day'; // Add this class to days with meetings
      }
    }
    return null;
  };

  // Function to handle date click
  const onDateClick = (value) => {
    setDate(value);
  };

  // Get meetings for selected date
  const selectedDateMeetings = meetings.filter(
    (meeting) => meeting.date === format(date, 'yyyy-MM-dd')
  );

  return (
    <Container maxWidth="md" style={{ paddingTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Your Calendar
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Calendar
            onChange={onDateClick}
            value={date}
            tileClassName={tileClassName}
            locale="en-US"
          />
        </Box>
        <Box sx={{ marginTop: '20px', width: '100%' }}>
          <Typography variant="h5" gutterBottom>
            Meetings on {format(date, 'MMM dd, yyyy')}
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          {selectedDateMeetings.length > 0 ? (
            <List>
              {selectedDateMeetings.map((meeting) => (
                <ListItem key={meeting.id}>
                  <ListItemIcon>
                    <EventIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Meeting with ${meeting.mentor}`}
                    secondary={`Time: ${meeting.time} | Platform: ${meeting.platform}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              No meetings on this date.
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default CalendarPage;
