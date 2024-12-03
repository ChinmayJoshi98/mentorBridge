import React from 'react';
import { Paper, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const PlannerSummaryCard = ({ plannerCourses, image }) => (
  <Paper
    sx={{
      padding: 2,
      textAlign: 'center',
      border: `2px solid #43A047`,
      borderRadius: 4,
      '&:hover': {
        backgroundColor: `#43A04720`,
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
        backgroundColor: '#43A04710',
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
        alt="Planner Summary"
        sx={{
          maxWidth: '80px',
          height: 'auto',
          objectFit: 'contain',
          borderRadius: '8px',
          marginBottom: '8px',
        }}
      />
      <Typography fontWeight="bold" color="#43A047" sx={{ mt: 1 }}>
        Planner Summary
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
      <Typography variant="subtitle1" color="#43A047" sx={{ mb: 1 }}>
        {plannerCourses.length} Courses
      </Typography>
      <List dense sx={{ width: '100%' }}>
        {plannerCourses.slice(0, 3).map((course, index) => (
          <ListItem key={index} disableGutters sx={{ justifyContent: 'center' }}>
            <ListItemText
              primary={course.name}
              primaryTypographyProps={{
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            />
          </ListItem>
        ))}
        {plannerCourses.length > 3 && (
          <ListItem disableGutters sx={{ justifyContent: 'center' }}>
            <ListItemText
              primary={`+${plannerCourses.length - 3} more`}
              primaryTypographyProps={{
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            />
          </ListItem>
        )}
      </List>
    </Box>
  </Paper>
);

export default PlannerSummaryCard;