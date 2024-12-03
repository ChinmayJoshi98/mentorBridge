import React, { useEffect, useState, useContext } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Chip,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import { mentorsData } from '../../data/mentorsData';
import { generateCoursePlan } from '../../utils/coursePlanGenerator';
import ChatWindow from './ChatWindow';
import { PlannerContext } from '../../context/PlannerContext';
import { getSemesterName } from '../../utils/semesterUtils';

const MentorRecommendations = ({ selectionData, handleBack }) => {
  const navigate = useNavigate();
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [coursePlan, setCoursePlan] = useState([]);
  const [chatMentor, setChatMentor] = useState(null);

  const { plannerCourses, addCourse, removeCourse } = useContext(PlannerContext);

  useEffect(() => {
    // Filter mentors based on interests
    const mentors = mentorsData.filter((mentor) =>
      mentor.interests.some((interest) =>
        selectionData.interests.includes(interest)
      )
    );
    setFilteredMentors(mentors);

    // Generate course plan with proper semester naming
    const plan = generateCoursePlan(
      parseInt(selectionData.semestersLeft),
      selectionData.interests
    ).map((semester, index) => ({
      ...semester,
      semester: getSemesterName(new Date(), index),
    }));
    setCoursePlan(plan);
  }, [selectionData]);

  const handleConnect = (mentor) => {
    setChatMentor(mentor);
  };

  const isInterestSelected = (interest) =>
    selectionData.interests.includes(interest);

  const isCourseInPlanner = (course) =>
    plannerCourses.some((c) => c.name === course.name);

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Recommended Mentors
      </Typography>
      <Grid container spacing={3}>
        {filteredMentors.map((mentor) => (
          <Grid item xs={12} sm={6} md={4} key={mentor.id}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    src={mentor.profilePic}
                    alt={mentor.name}
                    sx={{ width: 56, height: 56 }}
                  />
                }
                title={
                  <Typography variant="h6" fontWeight="bold">
                    {mentor.name}
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" color="textSecondary">
                    {mentor.role} at {mentor.company}
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2 }}
                >
                  <WorkIcon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }} />
                  {mentor.expertise.join(', ')}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2 }}
                >
                  <LocationOnIcon
                    sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }}
                  />
                  Based in {mentor.location || 'Unknown'}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {mentor.interests.map((interest, index) => (
                    <Chip
                      label={interest}
                      key={index}
                      sx={{
                        backgroundColor: isInterestSelected(interest)
                          ? '#43A04720'
                          : '#E0E0E0',
                        color: isInterestSelected(interest)
                          ? '#43A047'
                          : '#000000',
                        fontWeight: 'bold',
                      }}
                    />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleConnect(mentor)}
                  sx={{
                    backgroundColor: '#4880FF',
                    '&:hover': { backgroundColor: '#306AC9' },
                  }}
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" fontWeight="bold" sx={{ mt: 5, mb: 3 }}>
        Suggested Semester Plan
      </Typography>
      <Grid container spacing={3}>
        {coursePlan.map((semester, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  {semester.semester}
                </Typography>
                <List dense>
                  {semester.courses.map((course, idx) => (
                    <ListItem
                      key={idx}
                      secondaryAction={
                        isCourseInPlanner(course) ? (
                          <IconButton
                            edge="end"
                            aria-label="remove"
                            onClick={() => removeCourse(course.name)}
                          >
                            <RemoveCircleOutlineIcon color="error" />
                          </IconButton>
                        ) : (
                          <IconButton
                            edge="end"
                            aria-label="add"
                            onClick={() => addCourse(course)}
                          >
                            <AddCircleOutlineIcon color="primary" />
                          </IconButton>
                        )
                      }
                    >
                      <ListItemText primary={course.name} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/dashboard')}
        >
          Go to Home
        </Button>
      </Box>

      {chatMentor && (
        <ChatWindow mentor={chatMentor} onClose={() => setChatMentor(null)} />
      )}
    </Box>
  );
};

export default MentorRecommendations;