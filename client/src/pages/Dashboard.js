import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    Avatar,
    IconButton,
    Tooltip,
    Button,
    AppBar,
    Toolbar,
    InputBase,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo from './assets/logo.png';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState('Dashboard');

    // Sidebar options with icons
    const sidebarOptions = [
        { label: 'Dashboard', icon: <DashboardIcon /> },
        { label: 'Course Selection', icon: <SchoolIcon /> },
        { label: 'Resume Review', icon: <DescriptionIcon /> },
        { label: 'Networking', icon: <PeopleIcon /> },
        { label: 'Settings', icon: <SettingsIcon /> },
    ];

    // Dummy data for upcoming sessions
    const upcomingSessions = [
        { mentor: 'John Doe', date: 'Dec 6', time: '10:00 AM - 11:00 AM' },
        { mentor: 'Jane Smith', date: 'Dec 8', time: '2:00 PM - 3:00 PM' },
    ];

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#F9F9F9' }}>
            {/* Sidebar */}
            <Box
                sx={{
                    width: isSidebarOpen ? 240 : 80,
                    backgroundColor: '#FFFFFF',
                    color: '#393E46',
                    transition: 'width 0.3s',
                    borderRight: '1px solid #E0E0E0',
                    overflow: 'hidden',
                    position: 'relative',
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
                            onClick={() => setSelectedItem(item.label)}
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
                                    color:
                                        selectedItem === item.label ? '#4880FF' : '#393E46',
                                    mr: isSidebarOpen ? 2 : 0,
                                }}
                            >
                                {item.icon}
                            </IconButton>
                            {isSidebarOpen && (
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    {item.label}
                                </Typography>
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
                        left: isSidebarOpen ? 200 : 20,
                        color: '#393E46',
                        backgroundColor: '#F9F9F9',
                        borderRadius: '50%',
                        '&:hover': {
                            backgroundColor: '#4880FF',
                            color: '#FFFFFF',
                        },
                        transition: 'left 0.3s',
                    }}
                >
                    {isSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </Box>

            {/* Main Content */}
            <Box sx={{ flex: 1, backgroundColor: '#F9F9F9' }}>
                {/* Navbar */}
                <AppBar
                    position="static"
                    sx={{ backgroundColor: '#4880FF', color: '#FFFFFF', mb: 4 }}
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

                {/* Main Grid */}
                <Grid container spacing={3} sx={{ padding: 3 }}>
                    {/* Progress Overview */}
                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                padding: 3,
                                borderRadius: 4,
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ mb: 2, color: '#393E46' }}
                            >
                                Progress Overview
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={3}>
                                    <Paper sx={{ padding: 2, textAlign: 'center' }}>
                                        <Typography fontWeight="bold">Completed Sessions</Typography>
                                        <Typography variant="h5" color="#4880FF">
                                            12
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Paper sx={{ padding: 2, textAlign: 'center' }}>
                                        <Typography fontWeight="bold">Courses Selected</Typography>
                                        <Typography variant="h5" color="#4880FF">
                                            8
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Paper sx={{ padding: 2, textAlign: 'center' }}>
                                        <Typography fontWeight="bold">Mentor Reviews</Typography>
                                        <Typography variant="h5" color="#4880FF">
                                            9
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Paper sx={{ padding: 2, textAlign: 'center' }}>
                                        <Typography fontWeight="bold">Goals Achieved</Typography>
                                        <Typography variant="h5" color="#4880FF">
                                            5
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    {/* Upcoming Sessions */}
                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                padding: 3,
                                borderRadius: 4,
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ mb: 2, color: '#393E46' }}
                            >
                                Upcoming Sessions
                            </Typography>
                            {upcomingSessions.map((session, index) => (
                                <Box key={index} sx={{ marginBottom: 2 }}>
                                    <Typography>
                                        <strong>{session.mentor}</strong>: {session.date} at{' '}
                                        {session.time}
                                    </Typography>
                                </Box>
                            ))}
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#4880FF',
                                    color: '#FFFFFF',
                                    marginTop: 2,
                                }}
                            >
                                View All Sessions
                            </Button>
                        </Paper>
                    </Grid>

                    {/* Resources & Tips */}
                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                padding: 3,
                                borderRadius: 4,
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ mb: 2, color: '#393E46' }}
                            >
                                Resources & Tips
                            </Typography>
                            <Typography>- "How to Ace Interviews?" by Mentor X</Typography>
                            <Typography>- "Top Courses for Data Science"</Typography>
                            <Typography>- "Resume Writing Guidelines"</Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#4880FF',
                                    color: '#FFFFFF',
                                    marginTop: 2,
                                }}
                            >
                                Explore Resources
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;