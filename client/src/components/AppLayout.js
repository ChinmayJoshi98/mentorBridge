// src/components/AppLayout.js

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import EventNoteIcon from '@mui/icons-material/EventNote'; // Added icon
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Added icon

const AppLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState('');
  const location = useLocation();

  // Sidebar options with icons
  const sidebarOptions = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { label: 'Course Selection', icon: <SchoolIcon />, path: '/course-selection' },
    { label: 'Resume Review', icon: <DescriptionIcon />, path: '/resume-review' },
    { label: 'Interview Preparation', icon: <EventNoteIcon />, path: '/interview-preparation' }, // Added
    { label: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' }, // Added
    // ... other options
  ];

  // Map paths to sidebar labels
  const pathToLabelMap = {
    '/dashboard': 'Dashboard',
    '/course-selection': 'Course Selection',
    '/course-selection/plan': 'Course Selection',
    '/resume-review': 'Resume Review',
    '/interview-preparation': 'Interview Preparation', // Added
    '/calendar': 'Calendar', // Added
    // ... other paths
  };

  useEffect(() => {
    // Get the current path
    const currentPath = location.pathname;

    // Get the label corresponding to the current path
    const currentLabel = pathToLabelMap[currentPath] || 'Dashboard';

    // Update the selected item
    setSelectedItem(currentLabel);
  }, [location]);

  // Calculate sidebar width
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
          {/* Render the child components */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;