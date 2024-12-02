import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeScore, setResumeScore] = useState(85); // Initial score
  const [hasNewResumeScore, setHasNewResumeScore] = useState(false);
  const [currentResume, setCurrentResume] = useState(null);

  const updateResumeScore = (score) => {
    setResumeScore(score);
    setHasNewResumeScore(true);
    setTimeout(() => setHasNewResumeScore(false), 5000); // Flash effect duration
  };

  const uploadResume = (resume) => {
    setCurrentResume(resume);
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeScore,
        hasNewResumeScore,
        updateResumeScore,
        currentResume,
        uploadResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};