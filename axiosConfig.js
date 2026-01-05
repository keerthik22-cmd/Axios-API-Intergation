const axios = require("axios");

const axiosInstance = axios.create({
  timeout: 5000
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      return Promise.reject({
        status: error.response.status,
        message: error.response.data.message || "API Error"
      });
    } else if (error.request) {
      return Promise.reject({ message: "No response from API server" });
    } else {
      return Promise.reject({ message: error.message });
    }
  }
);

module.exports = axiosInstance;
