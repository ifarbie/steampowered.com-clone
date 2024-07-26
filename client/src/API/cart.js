import axios from "axios";

const API_URL = "http://localhost:3001";

export const addToCart = async (offerIndex) => {
  try {
    const response = await axios.post(`${API_URL}/api/carts`, {
      priceListId: offerIndex,
    });
    console.log("Item added to cart:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const getCarts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/carts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error;
  }
};

export const deleteCart = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/api/carts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting cart with id ${id}:`, error);
    throw error;
  }
};

export const deleteAllCarts = async () => {
  try {
    const response = await axios.delete(`${API_URL}/api/carts`);
    return response.data;
  } catch (error) {
    console.error("Error deleting all carts:", error);
    throw error;
  }
};

export const addCartPayment = async () => {
  try {
    const response = await axios.post(`${API_URL}/api/carts/payment`);
    console.log(response);
  } catch (error) {
    console.error("Error add cart to product owned:", error);
    throw error;
  }
}
