import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Divider,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const ResourcesTips = ({ resources }) => (
  <Paper
    sx={{
      padding: 3,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Typography
      variant="h6"
      fontWeight="bold"
      sx={{ mb: 2, color: '#393E46' }}
    >
      Resources & Tips
    </Typography>
    <List sx={{ flex: 1, width: '100%' }}>
      {resources.map((resource, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#43A047' }}>
                <LightbulbIcon sx={{ color: '#FFFFFF' }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight="bold">
                  {resource.title}
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {resource.author}
                </Typography>
              }
            />
          </ListItem>
          {index < resources.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#4880FF',
        color: '#FFFFFF',
        marginTop: 2,
        alignSelf: 'center',
        paddingX: 4,
        '&:hover': {
          backgroundColor: '#306AC9',
        },
      }}
    >
      Explore Resources
    </Button>
  </Paper>
);

export default ResourcesTips;