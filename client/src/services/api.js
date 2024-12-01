import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Fetch all courses
export const fetchCourses = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/courses`);
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};

// Fetch course plans for a mentee
export const fetchCoursePlans = async (menteeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/plans/${menteeId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching course plans:', error);
        throw error;
    }
};

// Fetch recommendations for a mentee
export const fetchRecommendations = async (menteeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/recommendations/${menteeId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        throw error;
    }
};
