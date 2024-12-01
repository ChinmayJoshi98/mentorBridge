import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const LoginPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e0f2ff", // Adjust background color
        background: "linear-gradient(to right, #6dafe8, #74c1ff)",
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          <span style={{ color: "#4a90e2" }}>mentor</span>Bridge
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 3 }}>
          Please enter your email and password to continue
        </Typography>
        <TextField
          fullWidth
          label="Email address"
          variant="outlined"
          margin="normal"
          type="email"
          defaultValue="mentee@uic.edu"
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          defaultValue="••••••••"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 1,
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember Password"
          />
          <Link href="#" underline="none">
            Forget Password?
          </Link>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: 2,
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#4a90e2",
          }}
        >
          Sign In
        </Button>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Don’t have an account?{" "}
          <Link href="#" underline="none" color="primary">
            Create Account
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;