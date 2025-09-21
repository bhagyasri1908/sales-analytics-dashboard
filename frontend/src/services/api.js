// src/services/api.js
import axios from "axios";

const api = {
  getRevenue: (startDate, endDate) =>
    axios.get(`/api/revenue?startDate=${startDate}&endDate=${endDate}`),
    
  getTopProducts: (startDate, endDate) =>
    axios.get(`/api/top-products?startDate=${startDate}&endDate=${endDate}`)
};

export default api;
