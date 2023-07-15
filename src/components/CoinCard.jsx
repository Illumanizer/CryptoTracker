import React from "react";
import { Heading, VStack, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinsCard = ({ id,name,image,price,symbol,currencySymbol="₹" }) => {
  return (
    <Link to={`/coins/${id}`} >
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Img
          src={image}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"coins"}
        />

        <Heading size="md" noOfLines={1}>
          {symbol}
        </Heading>

        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price? `${currencySymbol}${price}`:"NA"}</Text>
      </VStack>
    </Link>
  );
};

export default CoinsCard;
