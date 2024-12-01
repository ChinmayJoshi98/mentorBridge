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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
    // State to manage sidebar collapse
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    // Dummy data for pie chart
    const pieData = [
        { name: 'Completed', value: 75, color: '#00ADB5' },
        { name: 'Remaining', value: 25, color: '#393E46' },
    ];

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#222831' }}>
            {/* Sidebar */}
            <Box
                sx={{
                    width: isSidebarOpen ? 240 : 80,
                    backgroundColor: '#222831',
                    color: '#EEEEEE',
                    transition: 'width 0.3s',
                    overflow: 'hidden',
                }}
            >
                {/* Sidebar Header */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isSidebarOpen ? 'space-between' : 'center',
                        padding: 2,
                        backgroundColor: '#393E46',
                    }}
                >
                    {isSidebarOpen && (
                        <Typography variant="h6" fontWeight="bold">
                            mentorBridge
                        </Typography>
                    )}
                    <IconButton
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        sx={{ color: '#EEEEEE' }}
                    >
                        {isSidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>
                </Box>

                {/* Sidebar Links */}
                <Box sx={{ mt: 2 }}>
                    {['Dashboard', 'Course Selection', 'Resume Review', 'Networking', 'Settings'].map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                padding: isSidebarOpen ? 2 : 1,
                                textAlign: isSidebarOpen ? 'left' : 'center',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#393E46',
                                    color: '#00ADB5',
                                    transition: 'background-color 0.3s',
                                },
                            }}
                        >
                            {isSidebarOpen ? (
                                <Typography>{item}</Typography>
                            ) : (
                                <Tooltip title={item} placement="right">
                                    <Typography>{item[0]}</Typography>
                                </Tooltip>
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={{ flex: 1, padding: 3, backgroundColor: '#EEEEEE' }}>
                {/* Header */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 4,
                    }}
                >
                    <Typography variant="h4" fontWeight="bold" sx={{ color: '#222831' }}>
                        Welcome, Mentee One
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Tooltip title="Notifications">
                            <IconButton>
                                <NotificationsIcon sx={{ color: 'black' }} /> {/* Notifications icon in black */}
                            </IconButton>
                        </Tooltip>
                        <Avatar sx={{ bgcolor: '#EEEEEE', color: 'black' }}>MO</Avatar> {/* Profile icon in black */}
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
                                backgroundColor: 'white',
                                boxShadow: '0 4px 12px rgba(57, 62, 70, 0.5)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ mb: 2, color: '#222831' }}
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
                                backgroundColor: 'white',
                                boxShadow: '0 4px 12px rgba(57, 62, 70, 0.5)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ mb: 2, color: '#222831' }}
                            >
                                Upcoming Deadlines
                            </Typography>
                            <Typography>- Submit Resume by Dec 5</Typography>
                            <Typography>- Mock Interview on Dec 10</Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#00ADB5',
                                    color: '#EEEEEE',
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
                                backgroundColor: 'white',
                                boxShadow: '0 4px 12px rgba(57, 62, 70, 0.5)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ mb: 2, color: '#222831' }}
                            >
                                Recommended Mentors
                            </Typography>
                            <Typography>- John Doe: Data Science Expert</Typography>
                            <Typography>- Jane Smith: Frontend Developer</Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#00ADB5',
                                    color: '#EEEEEE',
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
