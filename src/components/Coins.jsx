import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Error from "./Error";
import CoinsCard from "./CoinCard";
import Loader from "./Loader";

const Coins = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setloading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setcoins(data);
        // console.log(data);
        setloading(false);
      } catch (e) {
        // console.error(e);
        setError(true);
        setloading(false);
      }
    };
    fetchcoins();
  }, [currency, page]);

  if (error) {
    return <Error msg={"error while fetching coins"}/>;
  }
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
        <RadioGroup value={currency} onChange={setCurrency} p={'9'}>
          <HStack spacing={"5"}>
            <Radio value={"inr"}>₹</Radio>
            <Radio value={"usd"}>$</Radio>
            <Radio value={"eur"}>€</Radio>
          </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinsCard
                id={i.id}
                key={i.id}
                name={i.name}
                image={i.image}
                price={i.current_price}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
      

          <HStack p={"8"} overflowX={"auto"}>
            {btns.map((item, index) => (
              <Button
                key={index+1}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index+1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
