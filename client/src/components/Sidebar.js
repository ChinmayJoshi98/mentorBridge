import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

const Sidebar = ({
  isSidebarOpen,
  setSidebarOpen,
  selectedItem,
  setSelectedItem,
  sidebarOptions,
  sidebarWidth,
}) => {
  const navigate = useNavigate();

  const handleNavigation = (label) => {
    setSelectedItem(label);
    if (label === 'Dashboard') navigate('/dashboard');
    else if (label === 'Course Selection') navigate('/course-selection');
    // Add more navigation as needed
  };

  return (
    <Box
      sx={{
        width: sidebarWidth,
        backgroundColor: '#FFFFFF',
        color: '#393E46',
        transition: 'width 0.3s',
        borderRight: '1px solid #E0E0E0',
        overflow: 'hidden',
        position: 'fixed',
        height: '100vh',
      }}
    >
      {/* Sidebar Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isSidebarOpen ? 'space-between' : 'center',
          padding: 2,
          borderBottom: '1px solid #E0E0E0',
        }}
      >
        <img
          src={logo}
          alt="mentorBridge Logo"
          style={{
            height: isSidebarOpen ? '65px' : '15px',
            cursor: 'pointer',
            transition: 'height 0.3s',
          }}
        />
      </Box>

      {/* Sidebar Links */}
      <Box sx={{ mt: 2 }}>
        {sidebarOptions.map((item, index) => (
          <Box
            key={index}
            onClick={() => handleNavigation(item.label)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: isSidebarOpen ? 'flex-start' : 'center',
              padding: isSidebarOpen ? 2 : 1,
              cursor: 'pointer',
              backgroundColor:
                selectedItem === item.label ? '#E3F2FD' : 'transparent',
              color: selectedItem === item.label ? '#4880FF' : '#393E46',
              '&:hover': {
                backgroundColor: '#E3F2FD',
                color: '#4880FF',
                transition: 'background-color 0.3s',
              },
            }}
          >
            <IconButton
              sx={{
                color: selectedItem === item.label ? '#4880FF' : '#393E46',
                mr: isSidebarOpen ? 2 : 0,
              }}
            >
              {item.icon}
            </IconButton>
            {isSidebarOpen && (
              <Typography sx={{ fontWeight: 'bold' }}>{item.label}</Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* Expand/Collapse Button */}
      <IconButton
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        sx={{
          position: 'absolute',
          bottom: 16,
          right: -20,
          color: '#393E46',
          backgroundColor: '#F9F9F9',
          borderRadius: '50%',
          '&:hover': {
            backgroundColor: '#4880FF',
            color: '#FFFFFF',
          },
          transition: 'right 0.3s',
        }}
      >
        {isSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </Box>
  );
};

export default Sidebar;