import { useEffect, useState } from "react";
import { fetchProducts } from "../../API/product";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetchProducts();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [])

  return products;
};
