import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material';
import SemesterSelection from './courseSelection/SemesterSelection';
import GraduationGoals from './courseSelection/GraduationGoals';
import InterestsSelection from './courseSelection/InterestsSelection';
import CourseRecommendations from './courseSelection/CourseRecommendations';
import ReviewPlan from './courseSelection/ReviewPlan';

const steps = [
  'Select Semester',
  'Set Graduation Goals',
  'Select Interests',
  'View Recommendations',
  'Review and Save Plan',
];

const CourseSelection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectionData, setSelectionData] = useState({
    semester: '',
    graduationGoals: '',
    interests: [],
    selectedCourses: [],
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%', padding: 3 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ marginTop: 3 }}>
        {activeStep === 0 && (
          <SemesterSelection
            selectionData={selectionData}
            setSelectionData={setSelectionData}
          />
        )}
        {activeStep === 1 && (
          <GraduationGoals
            selectionData={selectionData}
            setSelectionData={setSelectionData}
          />
        )}
        {activeStep === 2 && (
          <InterestsSelection
            selectionData={selectionData}
            setSelectionData={setSelectionData}
          />
        )}
        {activeStep === 3 && (
          <CourseRecommendations
            selectionData={selectionData}
            setSelectionData={setSelectionData}
          />
        )}
        {activeStep === 4 && (
          <ReviewPlan
            selectionData={selectionData}
            setSelectionData={setSelectionData}
          />
        )}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          color="primary"
          disabled={
            (activeStep === 0 && !selectionData.semester) ||
            (activeStep === 1 && !selectionData.graduationGoals) ||
            (activeStep === 2 && selectionData.interests.length === 0)
          }
        >
          {activeStep === steps.length - 1 ? 'Save Plan' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default CourseSelection;