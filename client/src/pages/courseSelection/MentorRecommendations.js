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
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
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

  // Function to check if interest is selected by user
  const isInterestSelected = (interest) =>
    selectionData.interests.includes(interest);

  // Function to check if course is in planner
  const isCourseInPlanner = (course) =>
    plannerCourses.some((c) => c.name === course.name);

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Recommended Mentors
      </Typography>
      <Grid container spacing={2}>
        {filteredMentors.map((mentor) => (
          <Grid item xs={12} sm={6} md={4} key={mentor.id}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar src={mentor.profilePic} alt={mentor.name}>
                    {mentor.name[0]}
                  </Avatar>
                }
                title={mentor.name}
              />
              <CardContent>
                <Box sx={{ mb: 1 }}>
                  {mentor.interests.map((interest, index) => (
                    <Chip
                      label={interest}
                      key={index}
                      sx={{
                        mr: 1,
                        mb: 1,
                        backgroundColor: isInterestSelected(interest)
                          ? '#43A04720' // Light green background
                          : '#E0E0E0',
                        color: isInterestSelected(interest)
                          ? '#43A047'
                          : '#000000',
                      }}
                    />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleConnect(mentor)}
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Suggested Course Plan */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 5, mb: 3 }}>
        Suggested Semester Plan
      </Typography>
      <Grid container spacing={2}>
        {coursePlan.map((semester, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
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

      {/* Chat Window */}
      {chatMentor && (
        <ChatWindow mentor={chatMentor} onClose={() => setChatMentor(null)} />
      )}
    </Box>
  );
};

export default MentorRecommendations;