import React from 'react';
import { Box, Typography, IconButton, TextField, Button, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ChatWindow = ({ mentor, onClose }) => {
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 20,
        width: 350,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        boxShadow: '0 0 15px rgba(0,0,0,0.3)',
        zIndex: 1000,
        overflow: 'hidden',
      }}
    >
      <Box sx={{ backgroundColor: '#4880FF', color: '#FFFFFF', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">{mentor.name}</Typography>
        <IconButton size="small" onClick={onClose}>
          <CloseIcon sx={{ color: '#FFFFFF' }} />
        </IconButton>
      </Box>
      <Box sx={{ flex: 1, p: 2, overflowY: 'auto', backgroundColor: '#F9F9F9' }}>
        {/* Chat messages would go here */}
        <Typography variant="body2" color="textSecondary">
          Chat functionality is under development.
        </Typography>
      </Box>
      <Box sx={{ p: 2, borderTop: '1px solid #E0E0E0', backgroundColor: '#FFFFFF' }}>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Type a message..."
          sx={{ mb: 1 }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default ChatWindow;