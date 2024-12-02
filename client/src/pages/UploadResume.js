// src/pages/UploadResume.js

import React, { useState } from 'react';
import { Box, Typography, Button, Chip, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UploadResume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
    // Simulate parsing the resume to generate tags
    const generatedTags = ['Frontend Development', 'Machine Learning', 'React'];
    setTags(generatedTags);
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags((tags) => tags.filter((tag) => tag !== tagToDelete));
  };

  const handleNext = () => {
    // Save the tags and proceed
    navigate('/resume-review/job-interests', { state: { tags } });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper
        sx={{
          padding: 3,
          borderRadius: 4,
          maxWidth: 600,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          Upload Your Resume
        </Typography>
        <Button variant="contained" component="label">
          Choose File
          <input type="file" hidden accept="application/pdf" onChange={handleFileChange} />
        </Button>
        {resumeFile && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Selected File: {resumeFile.name}
          </Typography>
        )}
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