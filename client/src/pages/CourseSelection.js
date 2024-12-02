import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, StepButton } from '@mui/material';
import SemesterInput from '../pages/courseSelection/SemesterInput';
import InterestsSelection from '../pages/courseSelection/InterestsSelection';
import MentorRecommendations from '../pages/courseSelection/MentorRecommendations';

const steps = ['Semesters Left', 'Select Interests', 'Recommendations'];

const CourseSelection = () => {
  // Selection data
  const [selectionData, setSelectionData] = useState({
    semestersLeft: '',
    interests: [],
  });

  // Step management
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  // Handle step navigation
  const handleStep = (step) => () => {
    // Optional: Add validation logic to prevent navigating to future steps without completing current step
    if (step <= activeStep || validateStep(step)) {
      setActiveStep(step);
    }
  };

  // Validation logic (you can enhance this as needed)
  const validateStep = (step) => {
    if (step === 1 && selectionData.semestersLeft === '') {
      return false;
    }
    if (step === 2 && selectionData.interests.length === 0) {
      return false;
    }
    return true;
  };

  // Handle Next and Back buttons
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      {/* Stepper */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)}>{label}</StepButton>
          </Step>
        ))}
      </Stepper>

      {/* Step Content */}
      <Box sx={{ mt: 4 }}>
        {activeStep === 0 && (
          <SemesterInput
            selectionData={selectionData}
            setSelectionData={setSelectionData}
            handleNext={handleNext}
          />
        )}
        {activeStep === 1 && (
          <InterestsSelection
            selectionData={selectionData}
            setSelectionData={setSelectionData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {activeStep === 2 && (
          <MentorRecommendations
            selectionData={selectionData}
            handleBack={handleBack}
          />
        )}
      </Box>
    </Box>
  );
};

export default CourseSelection;