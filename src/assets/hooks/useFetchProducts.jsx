import { useState, useEffect } from "react";
import axios from "axios";
const useFetchProducts = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/productos");
        setProducts(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
      
    };
    fetchProducts();
  }, []);

  return products
}

export default useFetchProducts

