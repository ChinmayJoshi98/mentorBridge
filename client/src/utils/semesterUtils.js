export const getSemesterName = (startDate, semesterIndex) => {
    const seasons = ['Spring', 'Summer', 'Fall'];
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const seasonIndexMap = [0, 0, 0, 1, 1, 1, 2, 2, 2, 0, 0, 0]; // Map months to seasons
  
    const startSeasonIndex = seasonIndexMap[startMonth];
    const totalSeasons = seasons.length;
  
    const semesterSeasonIndex =
      (startSeasonIndex + semesterIndex) % totalSeasons;
    const semesterYear =
      startYear +
      Math.floor((startSeasonIndex + semesterIndex) / totalSeasons);
  
    const semesterSeason = seasons[semesterSeasonIndex];
  
    return `${semesterSeason} ${semesterYear}`;
  };  