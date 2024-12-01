import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Welcome to Mentor Bridge Dashboard
            </Typography>
            <Box display="flex" gap={2} mt={2}>
                <Button
                    variant="contained"
                    onClick={() => navigate('/course-selection')}
                >
                    Go to Course Selection
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate('/course-plan')}
                >
                    View Course Plan
                </Button>
            </Box>
        </Box>
    );
};

export default Dashboard;