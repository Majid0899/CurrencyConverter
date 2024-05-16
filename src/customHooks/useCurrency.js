import { useState } from "react";
import { useEffect } from "react";

const useCurrency = (currency) => {
    const[data,setData]=useState({})
  useEffect(() => {
    const fetchData = async () => {
        
      try {
        const curr = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
        );

        const response = await curr.json();
        setData(response[currency])
        
      } catch (error) {
        console.log("CustomHooks::useCurrency::error", error);
      }
    };
    fetchData()
  }, []);
  return data;
};
export default useCurrency;
