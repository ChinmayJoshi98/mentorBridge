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
        backgroundColor: `${color}20`,
        transition: '0.3s',
      },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
    }}
  >
    <Box sx={{ mt: 1, mb: 1 }}>
      {icon}
      <Typography fontWeight="bold" sx={{ mt: 1 }}>
        {title}
      </Typography>
    </Box>
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {progressType === 'circular' && (
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
        <Box
          sx={{
            backgroundColor: `${color}20`,
            borderRadius: '50%',
            width: 80,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" color={color} fontWeight="bold">
            {value}
          </Typography>
        </Box>
      )}
      {progressType === 'list' && (
        <Box sx={{ width: '100%' }}>
          <Typography variant="subtitle1" color={color} sx={{ mb: 1 }}>
            {value}
          </Typography>
          <List dense sx={{ width: '100%' }}>
            {listItems.map((item, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{ justifyContent: 'center' }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ textAlign: 'center', variant: 'body2' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  </Paper>
);

export default ProgressCard;