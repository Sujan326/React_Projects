import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`;

    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-yHgDB3ZXvxgc6LF9AdojjGeR" },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setAllCoin(data);
    //   console.log("Data: ", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
