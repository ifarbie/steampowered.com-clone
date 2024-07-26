import { fetchRegions } from "@/API/region";
import { useEffect, useState } from "react";

export const useGetRegions = () => {
  const [regions, setRegions] = useState([]);

  const getRegions = async () => {
    try {
      const response = await fetchRegions();
    setRegions(response);
    } catch (error) {
      console.log(error);      
    }
  };

  useEffect(() => {
    getRegions();
  }, []);

  return regions;
};
