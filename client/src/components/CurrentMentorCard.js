import React from 'react';
import {
  Paper,
  Typography,
  Avatar,
  Box,
  Chip,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

const CurrentMentorCard = ({ mentor }) => (
  <Paper
    sx={{
      padding: 2,
      textAlign: 'center',
      border: `2px solid #4880FF`,
      borderRadius: 4,
      '&:hover': {
        backgroundColor: `#4880FF20`,
        transition: '0.3s',
      },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
    }}
  >
    <Box sx={{ mt: 1, mb: 1 }}>
      <PeopleIcon sx={{ fontSize: 40, color: '#4880FF' }} />
      <Typography fontWeight="bold" sx={{ mt: 1 }}>
        Current Mentor
      </Typography>
    </Box>
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {mentor ? (
        <>
          <Avatar
            src={mentor.profilePic}
            alt={mentor.name}
            sx={{ width: 80, height: 80, mb: 1 }}
          />
          <Typography variant="h6" fontWeight="bold">
            {mentor.name}
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {mentor.interests.slice(0, 3).map((interest, index) => (
              <Chip
                label={interest}
                key={index}
                sx={{
                  mr: 0.5,
                  mb: 0.5,
                  backgroundColor: '#43A04720',
                  color: '#43A047',
                }}
              />
            ))}
            {mentor.interests.length > 3 && (
              <Chip
                label={`+${mentor.interests.length - 3} more`}
                sx={{
                  mr: 0.5,
                  mb: 0.5,
                  backgroundColor: '#E0E0E0',
                  color: '#000000',
                }}
              />
            )}
          </Box>
        </>
      ) : (
        <Typography variant="body1" color="textSecondary">
          No mentor assigned yet.
        </Typography>
      )}
    </Box>
  </Paper>
);

export default CurrentMentorCard;