import axios from "axios";

export const fetchRegions = async () => {
  const response = await axios.get("http://localhost:3001/api/regions");
  return response.data.data
};
