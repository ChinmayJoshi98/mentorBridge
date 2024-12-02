import React, { useContext } from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { PlannerContext } from '../context/PlannerContext';

const PlannerSummary = () => {
  const { plannerCourses, removeCourse } = useContext(PlannerContext);

  return (
    <Paper
      sx={{
        padding: 3,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Planner Summary
      </Typography>
      <List sx={{ flex: 1, overflowY: 'auto' }}>
        {plannerCourses.map((course, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeCourse(course.name)}
              >
                <DeleteIcon color="error" />
              </IconButton>
            }
          >
            <ListItemText primary={course.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default PlannerSummary;