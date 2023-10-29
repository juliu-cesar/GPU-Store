import { useEffect, useState } from "react";
import { StyledProductPrice } from "./components/StyledProductPrice";
import ButtonAddToCart from "@/src/components/ButtonAddToCart";

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

  useEffect(() => {
    if (!textList) return;
    setCash_price(
      (textList.price * 0.9).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    );
    setInstallment_price(
      (textList.price / 12).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    );
  }, [textList?.price]);

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
          <h3>{cash_price}</h3>
          <p>à vista no pix com 10% de desconto</p>
        </div>
        <div className="installment_price">
          <h3>
            {textList?.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
          <p>em 12x de {installment_price} sem juros</p>
        </div>
      </div>
      <div className="buttons">
        <ButtonAddToCart title={textList?.title} price={textList?.price} productId={ID} />
      </div>
    </StyledProductPrice>
  );
}
