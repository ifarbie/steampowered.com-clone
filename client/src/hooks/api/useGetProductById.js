import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProductById } from "../../API/product";

export const useGetProductById = (id) => {
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await fetchProductById(id);
      setProduct(response);
    } catch (error) {
      navigate('/');
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return product;
};
