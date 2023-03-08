import { NextRouter } from "next/router";
import { useState } from "react";
import Header from "../Header";
import { StyledProduct } from "./components/StyledProduct";

interface Props{
  router: NextRouter;
}
export default function ProductPage({router}: Props){
  const [param, setParam] = useState<string | string[] | undefined>("");

  console.log(router);
  
  return(
    <StyledProduct>
      <Header cartType={0} />
    </StyledProduct>
  )
}