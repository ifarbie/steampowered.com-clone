import axios from "axios";

const API_URL = "http://localhost:3001";

export const fetchProductsByCategory = async (id) => {
  const response = await axios.get(`${API_URL}/api/category/${id}`);
  return response.data.category.products;
}

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/api/products`);
  return response.data.data;
}