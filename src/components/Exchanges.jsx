import { Container, HStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Error from "./Error";
import ExchangeCard from "./ExchangeCard";
import Loader from "./Loader";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/exchanges"
        );
        setExchanges(data);
        //   console.log(data);
        setloading(false);
      } catch (e) {
        // console.error(e);
        setError(true);
        setloading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) {
    return <Error />;
  }
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                image={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
