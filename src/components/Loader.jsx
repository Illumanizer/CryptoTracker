import { VStack } from "@chakra-ui/react";
import React from "react";
import { DualRing } from "react-awesome-spinners";
const Loader = () => {
  return (
   <VStack justifyContent={"center"} height={'80vh'}>
    <DualRing size={"90"}/>
   </VStack>
      
  );
};

export default Loader;
