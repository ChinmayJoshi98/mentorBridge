import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Paper,
  Grid,
} from '@mui/material';
import { allCourses } from '../../data/coursesData';

const CourseRecommendations = ({ selectionData, setSelectionData }) => {
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    // Filter courses based on interests
    const filteredCourses = allCourses.filter((course) =>
      course.interests.some((interest) =>
        selectionData.interests.includes(interest)
      )
    );
    setRecommendedCourses(filteredCourses);
  }, [selectionData.interests]);

  const handleCourseSelect = (courseId) => {
    const { selectedCourses } = selectionData;
    const newSelectedCourses = selectedCourses.includes(courseId)
      ? selectedCourses.filter((id) => id !== courseId)
      : [...selectedCourses, courseId];

    setSelectionData({ ...selectionData, selectedCourses: newSelectedCourses });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Recommended Courses
      </Typography>
      <Grid container spacing={2}>
        {recommendedCourses.map((course) => (
          <Grid item xs={12} md={6} key={course.id}>
            <Paper sx={{ padding: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectionData.selectedCourses.includes(course.id)}
                    onChange={() => handleCourseSelect(course.id)}
                  />
                }
                label={
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {course.name}
                    </Typography>
                    <Typography variant="body2">
                      {course.description}
                    </Typography>
                    <Typography variant="caption">
                      Credits: {course.credits}
                    </Typography>
                  </Box>
                }
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseRecommendations;