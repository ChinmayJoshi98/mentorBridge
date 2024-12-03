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
  Icon,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';

const CourseSelectionLanding = () => {
  const navigate = useNavigate();

  const currentCourses = {
    semester: 'Fall 2023',
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
        backgroundColor: '#F0F4F8',
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
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '70vh',
            position: 'relative',
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
            <SchoolIcon
              sx={{
                fontSize: 60,
                color: '#4880FF',
                mb: 2,
                backgroundColor: '#E3F2FD',
                borderRadius: '50%',
                padding: 2,
              }}
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mb: 1,
                color: '#37474F',
                textTransform: 'uppercase',
                letterSpacing: 1.5,
              }}
            >
              Current Semester
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: '#607D8B',
                fontWeight: 'bold',
              }}
            >
              {currentCourses.semester}
            </Typography>
            <Divider sx={{ mb: 3, width: '100%', backgroundColor: '#B0BEC5' }} />
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                mb: 2,
                color: '#37474F',
                textDecoration: 'underline',
              }}
            >
              Current Courses
            </Typography>
            <List
              sx={{
                width: '100%',
                maxWidth: 400,
                backgroundColor: '#ECEFF1',
                borderRadius: 2,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              {currentCourses.courses.map((course, index) => (
                <ListItem
                  key={index}
                  disableGutters
                  sx={{
                    justifyContent: 'center',
                    padding: '10px 0',
                    '&:hover': {
                      backgroundColor: '#CFD8DC',
                    },
                  }}
                >
                  <ListItemText
                    primary={course}
                    primaryTypographyProps={{
                      variant: 'h6',
                      color: '#455A64',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 4,
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              borderRadius: 4,
              backgroundColor: '#4880FF',
              '&:hover': {
                backgroundColor: '#306AC9',
              },
              textTransform: 'capitalize',
              fontWeight: 'bold',
            }}
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