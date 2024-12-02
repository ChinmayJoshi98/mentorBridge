import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

const AppLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState('');
  const location = useLocation();

  // Sidebar options with icons
  const sidebarOptions = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { label: 'Course Selection', icon: <SchoolIcon />, path: '/course-selection' },
    { label: 'Resume Review', icon: <DescriptionIcon />, path: '/resume-review' },
    { label: 'Networking', icon: <PeopleIcon />, path: '/networking' },
    { label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  // Map paths to sidebar labels
  const pathToLabelMap = {
    '/dashboard': 'Dashboard',
    '/course-selection': 'Course Selection',
    '/course-selection/plan': 'Course Selection',
    '/resume-review': 'Resume Review',
    '/networking': 'Networking',
    '/settings': 'Settings',
    // Add other paths as needed
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