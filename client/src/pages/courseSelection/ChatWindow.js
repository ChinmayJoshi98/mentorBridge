import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Paper,
  Avatar,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VideocamIcon from '@mui/icons-material/Videocam';
import SendIcon from '@mui/icons-material/Send';

const ChatWindow = ({ mentor, onClose }) => {
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 20,
        width: 400,
        height: 550,
        display: 'flex',
        flexDirection: 'column',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        boxShadow: '0 0 15px rgba(0,0,0,0.3)',
        zIndex: 1000,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: '#4880FF',
          color: '#FFFFFF',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={mentor.profilePic}
            alt={mentor.name}
            sx={{ width: 40, height: 40, border: '2px solid #FFFFFF' }}
          />
          <Typography variant="h6" noWrap>
            {mentor.name}
          </Typography>
        </Box>
        <Box>
          <Tooltip title="Start Video Call">
            <IconButton size="small" sx={{ color: '#FFFFFF', mr: 1 }}>
              <VideocamIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Close Chat">
            <IconButton size="small" onClick={onClose}>
              <CloseIcon sx={{ color: '#FFFFFF' }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Chat Area */}
      <Box
        sx={{
          flex: 1,
          p: 2,
          overflowY: 'auto',
          backgroundColor: '#F9F9F9',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Dummy messages */}
        <Box sx={{ alignSelf: 'flex-end', mb: 2 }}>
          <Typography
            sx={{
              backgroundColor: '#4880FF',
              color: '#FFFFFF',
              borderRadius: 2,
              padding: 1,
              maxWidth: '70%',
              wordWrap: 'break-word',
              fontSize: '0.875rem',
            }}
          >
            Nice to connect with you!
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ display: 'block', mt: 0.5, textAlign: 'right' }}
          >
            10:05 AM
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="textSecondary"
          textAlign="center"
          sx={{ mt: 'auto', fontStyle: 'italic' }}
        >
          Chat functionality is under development.
        </Typography>
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid #E0E0E0',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          gap: 1,
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Type a message..."
          sx={{
            flexGrow: 1,
            backgroundColor: '#F9F9F9',
            borderRadius: 2,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            minWidth: 'fit-content',
            backgroundColor: '#4880FF',
            '&:hover': { backgroundColor: '#306AC9' },
          }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Paper>
  );
};

export default ChatWindow;