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

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper
        sx={{
          padding: 4,
          borderRadius: 4,
          maxWidth: 600,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 60, color: '#90A4AE', mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
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
              }}
            >
              <Typography variant="body1">{resumeFile.name}</Typography>
              <IconButton onClick={handleRemoveFile}>
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        {tags.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              Generated Tags
            </Typography>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                onDelete={() => handleDeleteTag(tag)}
                sx={{ m: 0.5 }}
              />
            ))}
          </Box>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
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