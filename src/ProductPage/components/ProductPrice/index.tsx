import { useContext, useEffect, useState } from "react";
import { StyledProductPrice } from "./components/StyledProductPrice";
import { TAllCards } from "@/src/components/TAllCards";
import { CartContext } from "@/src/Header/components/CartSection/components/CartProvider";
import { CardsContext } from "@/src/components/CardsProvider";

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
  const cartContext = useContext(CartContext);
  const allCards = useContext(CardsContext)
  const ProductList = cartContext.ProductList;
  const LS = "ProductList";

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

  function addCart() {
    let newArr: TAllCards = allCards.allCards;
    let newProductList: TAllCards = JSON.parse(JSON.stringify(ProductList));

    newArr = newArr.filter((el) => {
      return el.id == ID;
    });

    if (ProductList.length > 0) {
      if (ProductList.length >= 10) return;
      let index = newProductList.findIndex((e) => {
        return e.id == ID;
      });
      if (index != -1) {
        if (newProductList[index].amount! >= 5) return;
        newArr = newProductList;
        newArr[index].amount!++;
        addProductLS(newArr);
      } else {
        newArr[0].amount = 1;
        newProductList.push(newArr[0]);
        addProductLS(newProductList);
      }
    } else {
      newArr[0].amount = 1;

      newProductList.push(newArr[0]);
      addProductLS(newProductList);
    }
  }
  function addProductLS(pL: TAllCards) {
    cartContext.setProductList(pL);
    localStorage.setItem(LS, JSON.stringify(pL));
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
        {/* <button className="buy">Comprar</button> */}
        <button className="add_cart" onClick={addCart}>
          + carrinho
        </button>
      </div>
    </StyledProductPrice>
  );
}
