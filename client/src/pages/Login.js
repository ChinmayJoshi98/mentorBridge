import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    FormControlLabel,
    Checkbox,
    Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/bg.png';
import logo from './assets/Logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            if (email === 'mentee@uic.edu' && password === 'password123') {
                setError('');
                navigate('/dashboard');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error('Login failed:', err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    padding: 4,
                    textAlign: 'center',
                }}
            >
                <img
                    src={logo}
                    alt="MentorBridge Logo"
                    style={{ width: '60%', marginBottom: '20px' }}
                />
                <Typography variant="body1" sx={{ marginBottom: 3 }}>
                    Please enter your email and password to continue
                </Typography>
                {error && (
                    <Typography
                        variant="body2"
                        color="error"
                        sx={{ marginBottom: 2 }}
                    >
                        {error}
                    </Typography>
                )}
                <form onSubmit={handleLogin}>
                    <TextField
                        fullWidth
                        label="Email address"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                        }
                        label="Remember Password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: '#3A6EA5',
                            marginTop: 2,
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#2B5A87',
                            },
                        }}
                    >
                        Sign In
                    </Button>
                </form>
                <Box sx={{ marginTop: 2 }}>
                    <Link href="#" variant="body2" sx={{ marginRight: 2 }}>
                        Forget Password?
                    </Link>
                    <Typography variant="body2">
                        Don’t have an account?{' '}
                        <Link
                            href="#"
                            onClick={() => navigate('/signup')}
                            sx={{ color: '#3A6EA5' }}
                        >
                            Create Account
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;