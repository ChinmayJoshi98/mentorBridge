import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';

const UpcomingSessions = ({ upcomingSessions }) => (
  <Paper
    sx={{
      padding: 3,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Typography
      variant="h6"
      fontWeight="bold"
      sx={{ mb: 2, color: '#393E46' }}
    >
      Upcoming Sessions
    </Typography>
    {upcomingSessions.map((session, index) => (
      <Box key={index} sx={{ marginBottom: 2 }}>
        <Typography>
          <strong>{session.mentor}</strong>: {session.date} at {session.time}
        </Typography>
      </Box>
    ))}
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#4880FF',
        color: '#FFFFFF',
        marginTop: 2,
      }}
    >
      View All Sessions
    </Button>
  </Paper>
);

export default UpcomingSessions;