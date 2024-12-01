import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Add validation or API call here
        navigate('/dashboard');
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            sx={{ backgroundColor: '#f5f5f5', padding: 3 }}
        >
            <Typography variant="h4" gutterBottom>
                Login to MentorBridge
            </Typography>
            <Box width="100%" maxWidth="400px">
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ marginTop: 2 }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <Button
                    fullWidth
                    variant="text"
                    sx={{ marginTop: 1 }}
                    onClick={() => navigate('/signup')}
                >
                    Sign Up
                </Button>
            </Box>
        </Box>
    );
};

export default Login;