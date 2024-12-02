import React from 'react';
import {
  Paper,
  Typography,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const ProgressCard = ({
  title,
  value,
  icon,
  color,
  progressType, // 'circular', 'number', or 'list'
  listItems,
}) => (
  <Paper
    sx={{
      padding: 2,
      textAlign: 'center',
      border: `2px solid ${color}`,
      borderRadius: 4,
      '&:hover': {
        backgroundColor: `${color}20`, // Adding transparency
        transition: '0.3s',
      },
      minHeight: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {icon}
    <Typography fontWeight="bold" sx={{ mt: 1 }}>
      {title}
    </Typography>
    {progressType === 'circular' && (
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex',
          mt: 2,
        }}
      >
        <CircularProgress
          variant="determinate"
          value={value}
          size={80}
          thickness={5}
          sx={{
            color: color,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" color={color} fontWeight="bold">
            {value}%
          </Typography>
        </Box>
      </Box>
    )}
    {progressType === 'number' && (
      <Typography variant="h5" color={color} sx={{ mt: 2 }}>
        {value}
      </Typography>
    )}
    {progressType === 'list' && (
      <>
        <Typography variant="subtitle1" color={color}>
          {value}
        </Typography>
        <List dense sx={{ width: '100%' }}>
          {listItems.map((item, index) => (
            <ListItem key={index} sx={{ padding: 0 }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </>
    )}
  </Paper>
);

export default ProgressCard;