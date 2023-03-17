import { useContext, useEffect, useState } from "react";
import { StyledProductPrice } from "./components/StyledProductPrice";
import GPUCard from "@/GPUCard.json";
import { TGpuCard } from "@/src/components/TGpuCard";
import { CartContext } from "@/src/Header/components/CartSection/components/CartProvider";

interface Props {
  textList:
    | {
        title: string;
        subtitleList: string[];
        price: number;
      }
    | undefined;
    ID: string;
}
export default function ProductPrice({ textList, ID }: Props) {
  const [cash_price, setCash_price] = useState("");
  const [installment_price, setInstallment_price] = useState("");
  const cartContext = useContext(CartContext)

  useEffect(() => {
    setCash_price(((textList?.price || 0) * 0.9).toFixed(2).replace(".", ","))
    setInstallment_price(((textList?.price || 0) / 12).toFixed(2).replace(".", ","))
  }, [textList?.price]);

  function addCart() {
    let newArr: TGpuCard = GPUCard.gpuList
    let productList = cartContext.ProductList ? cartContext.ProductList : []

    newArr.filter((el)=>{
      return el.id == ID
    })
    productList.push(newArr[0])
    cartContext.setProductList(productList)
  }
  return (
    <StyledProductPrice>
      <div className="frame_title">
        <h2>{textList?.title}</h2>
        <ul>
          {textList?.subtitleList.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
      <div className="frame_price">
        <div className="cash_price">
          <h3>R$ {cash_price}</h3>
          <p>à vista no pix com 10% de desconto</p>
        </div>
        <div className="installment_price">
          <h3>R$ {textList?.price}</h3>
          <p>em 12x de R${installment_price} sem juros</p>
        </div>
      </div>
      <div className="buttons">
        {/* <button className="buy">Comprar</button> */}
        <button className="add_cart" onClick={addCart}>+ carrinho</button>
      </div>
    </StyledProductPrice>
  );
}
