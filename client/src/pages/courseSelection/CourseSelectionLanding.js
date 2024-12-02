import React from 'react';
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Divider,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';

const CourseSelectionLanding = () => {
  const navigate = useNavigate();

  const currentCourses = {
    semester: 'Fall 2024',
    courses: [
      'Data Structures',
      'Algorithms',
      'Operating Systems',
      'Database Systems',
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F9F9F9',
        minHeight: 'calc(100vh - 64px)', // Adjust for Navbar height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          sx={{
            padding: 4,
            borderRadius: 4,
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '70vh', // Ensures the button stays at the bottom
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SchoolIcon sx={{ fontSize: 50, color: '#4880FF', mb: 2 }} />
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ mb: 1, color: '#393E46' }}
            >
              Current Semester
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, color: '#555555' }}>
              {currentCourses.semester}
            </Typography>
            <Divider sx={{ mb: 3, width: '100%' }} />
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Current Courses
            </Typography>
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
              }}
            >
              {currentCourses.courses.map((course, index) => (
                <ListItem
                  key={index}
                  disableGutters
                  sx={{ justifyContent: 'center' }}
                >
                  <ListItemText
                    primary={course}
                    primaryTypographyProps={{
                      variant: 'h6',
                      color: '#555555',
                      textAlign: 'center',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4, px: 5, py: 1.5, fontSize: '1rem' }}
            onClick={() => navigate('/course-selection/plan')}
          >
            Plan Next Semesters
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default CourseSelectionLanding;