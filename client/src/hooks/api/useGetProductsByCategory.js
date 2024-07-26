import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../API/product";

export const useGetProductsByCategory = (id) => {
  const [products, setProducts] = useState([]);

  const getProductsByCategory = async () => {
    try {
      const response = await fetchProductsByCategory(id);
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsByCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return products
};
