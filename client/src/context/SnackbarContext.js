import React, { createContext, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbarData, setSnackbarData] = useState({
    open: false,
    message: '',
    severity: 'success', // 'success', 'error', 'warning', 'info'
  });

  const showSnackbar = (message, severity = 'success') => {
    setSnackbarData({
      open: true,
      message,
      severity,
    });
  };

  const handleClose = () => {
    setSnackbarData((prev) => ({ ...prev, open: false }));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snackbarData.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarData.severity}
          sx={{
            width: '100%',
            backgroundColor: snackbarData.severity === 'success' ? '#4caf50' : undefined, // Solid green for success
            color: '#fff', // Ensure white text
          }}
        >
          {snackbarData.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};