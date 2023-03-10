import { NextRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledProduct } from "./components/StyledProduct";
import Header from "../Header";
import product from "@/product.json"
import { IProduct } from "./components/IProduct";
import CarouselProduct from "./components/CarouselProduct";
import ProductPrice from "./components/ProductPrice";

interface Props{
  router: NextRouter;
}
export default function ProductPage({router}: Props){
  const [Product, setProduct] = useState<IProduct | undefined>();
  
  useEffect(() => {
    let id = router.query.params?.slice(-10)
    setProduct(product[id as keyof typeof product])
  }, [router.query]);
  return(
    <StyledProduct>
      <Header cartType={0} />
      <div className="Container_productPage">
        <div className="container_price">
          <CarouselProduct imgList={Product?.imgList} />
          <ProductPrice textList={Product?.textList} />
        </div>
        <div className="container_description">

        </div>
        <div className="container_table">

        </div>
        <div className="container_rating">

        </div>
      </div>
    </StyledProduct>
  )
}