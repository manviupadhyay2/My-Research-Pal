import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

const CreateResearchPaper = (data) => {
  console.log('CreateResearchPaper called with data:', data);
  return axiosClient.post('/user-resumes', data)
    .then(response => {
      console.log('CreateResearchPaper response:', response);
      return response;
    })
    .catch(error => {
      console.error('CreateResearchPaper error:', error);
      console.error('Error response:', error.response?.data);
      throw error;
    });
};

const GetUserResearchPapers = (userEmail) => {
  console.log('GetUserResearchPapers called with userEmail:', userEmail);
  return axiosClient.get(`/user-resumes?filters[userEmail][$eq]=${userEmail}&sort=createdAt:desc`)
    .then(response => {
      console.log('GetUserResearchPapers response:', response);
      return response;
    })
    .catch(error => {
      console.error('GetUserResearchPapers error:', error);
      console.error('Error response:', error.response?.data);
      throw error;
    });
};

const UpdateResearchPaperDetail = (id, data) => {
  console.log(`UpdateResearchPaperDetail called with id: ${id}, data:`, data);
  return axiosClient.put(`/user-resumes/${id}`, data)
    .then(response => {
      console.log('UpdateResearchPaperDetail response:', response);
      return response;
    })
    .catch(error => {
      console.error('UpdateResearchPaperDetail error:', error);
      console.error('Error response:', error.response?.data);
      throw error;
    });
};

const GetResearchPaperById = (id) => {
  console.log('GetResearchPaperById called with id:', id);
  return axiosClient.get(`/user-resumes/${id}?populate=*`)
    .then(response => {
      console.log('GetResearchPaperById response:', response);
      return response;
    })
    .catch(error => {
      console.error('GetResearchPaperById error:', error);
      console.error('Error response:', error.response?.data);
      throw error;
    });
};

const DeleteResearchPaperById = (id) => {
  console.log('DeleteResearchPaperById called with id:', id);
  return axiosClient.delete(`/user-resumes/${id}`)
    .then(response => {
      console.log('DeleteResearchPaperById response:', response);
      return response;
    })
    .catch(error => {
      console.error('DeleteResearchPaperById error:', error);
      console.error('Error response:', error.response?.data);
      throw error;
    });
};

export default {
  CreateResearchPaper,
  GetUserResearchPapers,
  UpdateResearchPaperDetail,
  GetResearchPaperById,
  DeleteResearchPaperById,
};