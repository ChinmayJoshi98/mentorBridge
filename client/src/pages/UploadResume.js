import React, { useState, useContext } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Paper,
  IconButton,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { SnackbarContext } from '../context/SnackbarContext';

const UploadResume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const { showSnackbar } = useContext(SnackbarContext);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);

    // Show snackbar notification
    showSnackbar('Resume uploaded successfully', 'success');

    // Simulate parsing the resume to generate tags
    const generatedTags = ['Frontend Development', 'Machine Learning', 'React'];
    setTags(generatedTags);
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags((tags) => tags.filter((tag) => tag !== tagToDelete));
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    setTags([]);
  };

  const handleNext = () => {
    navigate('/resume-review/job-interests', { state: { tags } });
  };

  // Function to color-code tags
  const getTagColor = (tag) => {
    if (['Frontend Development', 'React'].includes(tag)) {
      return { backgroundColor: '#E3F2FD', color: '#1E88E5' }; // Subtle blue for frontend
    }
    if (tag === 'Machine Learning') {
      return { backgroundColor: '#E8F5E9', color: '#43A047' }; // Subtle green for ML
    }
    return { backgroundColor: '#E0E0E0', color: '#000000' }; // Default
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: '#F9FAFB',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          padding: 4,
          borderRadius: 4,
          maxWidth: 600,
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CloudUploadIcon
          sx={{
            fontSize: 60,
            color: '#90A4AE',
            mb: 2,
            animation: 'bounce 2s infinite',
          }}
        />
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 3, color: '#37474F' }}
        >
          Upload Your Resume
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            component="label"
            startIcon={<CloudUploadIcon />}
            sx={{
              backgroundColor: '#2196F3',
              color: '#FFFFFF',
              '&:hover': { backgroundColor: '#1976D2' },
            }}
          >
            Choose File
            <input
              type="file"
              hidden
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </Button>
          {resumeFile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                mt: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  color: '#424242',
                  textAlign: 'center',
                  wordBreak: 'break-word',
                }}
              >
                {resumeFile.name}
              </Typography>
              <IconButton
                onClick={handleRemoveFile}
                sx={{
                  color: '#D32F2F',
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        {tags.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 1, color: '#37474F' }}
            >
              Generated Tags
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                justifyContent: 'center',
              }}
            >
              {tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  onDelete={() => handleDeleteTag(tag)}
                  sx={{
                    fontWeight: 'bold',
                    ...getTagColor(tag),
                  }}
                />
              ))}
            </Box>
          </Box>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4, paddingX: 4 }}
          onClick={handleNext}
          disabled={!resumeFile}
        >
          Next
        </Button>
      </Paper>
    </Box>
  );
};

export default UploadResume;