import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { allCourses } from '../../data/coursesData';

const ReviewPlan = ({ selectionData }) => {
  const selectedCoursesDetails = allCourses.filter((course) =>
    selectionData.selectedCourses.includes(course.id)
  );

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Review and Save Your Course Plan
      </Typography>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Selected Semester:
        </Typography>
        <Typography>{selectionData.semester}</Typography>

        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
          Graduation Goals:
        </Typography>
        <Typography>{selectionData.graduationGoals} semesters left</Typography>

        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
          Interests:
        </Typography>
        <Typography>{selectionData.interests.join(', ')}</Typography>

        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
          Selected Courses:
        </Typography>
        <List>
          {selectedCoursesDetails.map((course) => (
            <ListItem key={course.id}>
              <ListItemText
                primary={course.name}
                secondary={`Credits: ${course.credits}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ReviewPlan;