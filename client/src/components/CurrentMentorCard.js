import React from 'react';
import { Paper, Typography, Avatar, Box, Chip } from '@mui/material';

const CurrentMentorCard = ({ mentor, image }) => (
  <Paper
    sx={{
      padding: 2,
      textAlign: 'center',
      border: `2px solid #4880FF`,
      borderRadius: 4,
      '&:hover': {
        backgroundColor: `#4880FF20`,
        boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
        transform: 'scale(1.02)', // Add hover scaling
        transition: 'all 0.3s ease',
      },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Box
      sx={{
        backgroundColor: '#4880FF10',
        padding: 2,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Current Mentor"
        sx={{
          maxWidth: '80px',
          height: 'auto',
          objectFit: 'contain',
          borderRadius: '8px',
          marginBottom: '8px',
        }}
      />
      <Typography fontWeight="bold" color="#4880FF" sx={{ mt: 1 }}>
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
        mt: 2,
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
              gap: 1,
            }}
          >
            {mentor.interests.slice(0, 3).map((interest, index) => (
              <Chip
                label={interest}
                key={index}
                sx={{
                  backgroundColor: '#43A04720',
                  color: '#43A047',
                  fontWeight: 'bold',
                }}
              />
            ))}
            {mentor.interests.length > 3 && (
              <Chip
                label={`+${mentor.interests.length - 3} more`}
                sx={{
                  backgroundColor: '#E0E0E0',
                  color: '#000000',
                  fontStyle: 'italic',
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