import React, { useContext } from 'react';
import {
  Box,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Grid,
} from '@mui/material';
import { PlannerContext } from '../context/PlannerContext';
import StarIcon from '@mui/icons-material/Star';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const PlannerSummaryPage = () => {
  const { plannerCourses, removeCourse } = useContext(PlannerContext);

  const groupedCourses = plannerCourses.reduce((acc, course) => {
    if (!acc[course.semester]) acc[course.semester] = [];
    acc[course.semester].push(course);
    return acc;
  }, {});

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Planner Summary
      </Typography>
      {Object.entries(groupedCourses).map(([semester, courses]) => (
        <Card
          key={semester}
          sx={{
            borderRadius: 4,
            padding: 3,
            backgroundColor: '#F9F9F9',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            mb: 3,
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            {semester}
          </Typography>
          <List>
            {courses.map((course, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={course.name}
                    secondary={
                      <>
                        <Typography variant="body2" color="textSecondary">
                          Instructor: {course.instructor}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Planned for: {course.semester}
                        </Typography>
                      </>
                    }
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                    <Typography variant="body2" color="textSecondary">
                      {course.rating.toFixed(1)}
                    </Typography>
                    <StarIcon sx={{ color: '#FFD700', ml: 0.5 }} />
                  </Box>
                  <IconButton
                    edge="end"
                    aria-label="remove"
                    onClick={() => removeCourse(course.name)}
                  >
                    <RemoveCircleOutlineIcon color="error" />
                  </IconButton>
                </ListItem>
                {index < courses.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Card>
      ))}
    </Box>
  );
};

export default PlannerSummaryPage;