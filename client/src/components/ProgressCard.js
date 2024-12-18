import React, { useEffect, useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ProgressCard = ({
  title,
  value,
  image, // Accept image instead of icon
  color,
  progressType, // 'circular', 'number', or 'list'
  listItems,
  link,
  flash,
}) => {
  const [flashEffect, setFlashEffect] = useState(false);

  useEffect(() => {
    if (flash) {
      setFlashEffect(true);
      const timer = setTimeout(() => setFlashEffect(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [flash]);

  const CardContent = (
    <Paper
      sx={{
        padding: 2,
        textAlign: 'center',
        border: `2px solid ${color}`,
        borderRadius: 4,
        '&:hover': {
          backgroundColor: `${color}20`,
          transform: 'scale(1.02)',
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        backgroundColor: flashEffect ? `${color}20` : 'inherit',
        transition: 'background-color 0.5s',
      }}
    >
      <Box sx={{ mt: 1, mb: 1 }}>
        {/* Display image */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            maxWidth: '80%',
            height: 120,
            objectFit: 'contain',
            borderRadius: '8px',
            margin: '0 auto',
          }}
        />
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
                <ListItem key={index} disableGutters>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      textAlign: 'center',
                      variant: 'body2',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </Paper>
  );

  return link ? (
    <RouterLink to={link} style={{ textDecoration: 'none' }}>
      {CardContent}
    </RouterLink>
  ) : (
    CardContent
  );
};

export default ProgressCard;