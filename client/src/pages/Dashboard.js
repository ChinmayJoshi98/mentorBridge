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
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PieChart, Pie, Cell } from 'recharts';
import logo from './assets/logo.png';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState('Dashboard');

    // Dummy data for pie chart
    const pieData = [
        { name: 'Completed', value: 75, color: '#4880FF' }, // Updated primary blue
        { name: 'Remaining', value: 25, color: '#CCCCCC' }, // Gray for remaining
    ];

    // Sidebar options with icons
    const sidebarOptions = [
        { label: 'Dashboard', icon: <DashboardIcon /> },
        { label: 'Course Selection', icon: <SchoolIcon /> },
        { label: 'Resume Review', icon: <DescriptionIcon /> },
        { label: 'Networking', icon: <PeopleIcon /> },
        { label: 'Settings', icon: <SettingsIcon /> },
    ];

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#F9F9F9' }}>
            {/* Sidebar */}
            <Box
                sx={{
                    width: isSidebarOpen ? 240 : 80,
                    backgroundColor: '#FFFFFF', // Sidebar bg is now white
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
            <Box sx={{ flex: 1, padding: 3, backgroundColor: '#F9F9F9' }}>
                {/* Header */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 4,
                    }}
                >
                    <Typography variant="h4" fontWeight="bold" sx={{ color: '#393E46' }}>
                        Welcome, Mentee One
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Tooltip title="Notifications">
                            <IconButton>
                                <NotificationsIcon sx={{ color: '#393E46' }} />
                            </IconButton>
                        </Tooltip>
                        <Avatar sx={{ bgcolor: '#E0E0E0', color: '#393E46' }}>MO</Avatar>
                    </Box>
                </Box>

                {/* Main Grid */}
                <Grid container spacing={3}>
                    {/* Overview Card */}
                    <Grid item xs={12} md={6}>
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
                            <PieChart width={200} height={200}>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                            <Typography sx={{ textAlign: 'center', mt: 2 }}>
                                75% of your goals are completed!
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Upcoming Deadlines Card */}
                    <Grid item xs={12} md={6}>
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
                                Upcoming Deadlines
                            </Typography>
                            <Typography>- Submit Resume by Dec 5</Typography>
                            <Typography>- Mock Interview on Dec 10</Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#4880FF',
                                    color: '#FFFFFF',
                                    marginTop: 2,
                                }}
                            >
                                View All
                            </Button>
                        </Paper>
                    </Grid>

                    {/* Mentor Recommendations */}
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
                                Recommended Mentors
                            </Typography>
                            <Typography>- John Doe: Data Science Expert</Typography>
                            <Typography>- Jane Smith: Frontend Developer</Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#4880FF',
                                    color: '#FFFFFF',
                                    marginTop: 2,
                                }}
                            >
                                View All Mentors
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;