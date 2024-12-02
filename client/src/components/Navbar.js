import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  InputBase,
  Tooltip,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = ({ isSidebarOpen, setSidebarOpen, sidebarWidth }) => (
  <AppBar
    position="fixed"
    sx={{
      backgroundColor: '#4880FF',
      color: '#FFFFFF',
      marginLeft: `${sidebarWidth}px`,
      width: `calc(100% - ${sidebarWidth}px)`,
      transition: 'margin-left 0.3s, width 0.3s',
    }}
  >
    <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            backgroundColor: '#FFFFFF',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            padding: '0px 8px',
          }}
        >
          <SearchIcon sx={{ color: '#4880FF', mr: 1 }} />
          <InputBase
            placeholder="Search..."
            sx={{ flex: 1, color: '#393E46' }}
          />
        </Box>
      </Box>
      <Tooltip title="Notifications">
        <IconButton>
          <NotificationsIcon sx={{ color: '#FFFFFF' }} />
        </IconButton>
      </Tooltip>
      <Avatar sx={{ bgcolor: '#E0E0E0', color: '#393E46', ml: 2 }}>MO</Avatar>
    </Toolbar>
  </AppBar>
);

export default Navbar;