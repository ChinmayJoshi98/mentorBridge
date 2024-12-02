import React from 'react';
import { Paper, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

const PlannerSummaryCard = ({ plannerCourses }) => (
  <Paper
    sx={{
      padding: 2,
      textAlign: 'center',
      border: `2px solid #43A047`,
      borderRadius: 4,
      '&:hover': {
        backgroundColor: `#43A04720`,
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
      <AssignmentIcon sx={{ fontSize: 40, color: '#43A047' }} />
      <Typography fontWeight="bold" sx={{ mt: 1 }}>
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
              primaryTypographyProps={{ textAlign: 'center' }}
            />
          </ListItem>
        ))}
        {plannerCourses.length > 3 && (
          <ListItem disableGutters sx={{ justifyContent: 'center' }}>
            <ListItemText
              primary={`+${plannerCourses.length - 3} more`}
              primaryTypographyProps={{ textAlign: 'center', fontStyle: 'italic' }}
            />
          </ListItem>
        )}
      </List>
    </Box>
  </Paper>
);

export default PlannerSummaryCard;