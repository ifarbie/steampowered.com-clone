import axios from "axios";

const API_URL = "http://localhost:3001";

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/api/categories`);
  return response.data.data;
}