import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import ProgressOverview from '../components/ProgressOverview';
import UpcomingSessions from '../components/UpcomingSessions';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import ResourcesTips from '../components/ResourceTips';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const sidebarOptions = [
    { label: 'Dashboard', icon: <DashboardIcon /> },
    { label: 'Course Selection', icon: <SchoolIcon /> },
    { label: 'Resume Review', icon: <DescriptionIcon /> },
    { label: 'Networking', icon: <PeopleIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> },
  ];

  const upcomingSessions = [
    { mentor: 'John Doe', date: 'Dec 6', time: '10:00 AM - 11:00 AM' },
    { mentor: 'Jane Smith', date: 'Dec 8', time: '2:00 PM - 3:00 PM' },
  ];

  const resources = [
    '"How to Ace Interviews?" by Mentor X',
    '"Top Courses for Data Science"',
    '"Resume Writing Guidelines"',
  ];

  const currentCourses = {
    semester: 'Fall 2024',
    courses: [
      'Data Structures',
      'Algorithms',
      'Operating Systems',
      'Database Systems',
    ],
  };

  const resumeScore = 85;
  const projectsCompleted = 3;
  const completedSessions = 4;

  const sidebarWidth = isSidebarOpen ? 240 : 80;

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#F9F9F9' }}>
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        sidebarOptions={sidebarOptions}
        sidebarWidth={sidebarWidth}
      />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#F9F9F9',
          marginLeft: `${sidebarWidth}px`,
        }}
      >
        {/* Navbar */}
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          sidebarWidth={sidebarWidth}
        />

        {/* Adjusted main content to account for fixed AppBar */}
        <Box sx={{ marginTop: '64px', padding: 3 }}>
          {/* Main Grid */}
          <Grid container spacing={3}>
            {/* Progress Overview */}
            <Grid item xs={12}>
              <ProgressOverview
                resumeScore={resumeScore}
                currentCourses={currentCourses}
                projectsCompleted={projectsCompleted}
                completedSessions={completedSessions}
              />
            </Grid>

            {/* Upcoming Sessions */}
            <Grid item xs={12} md={6}>
              <UpcomingSessions upcomingSessions={upcomingSessions} />
            </Grid>

            {/* Resources & Tips */}
            <Grid item xs={12} md={6}>
              <ResourcesTips resources={resources} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;