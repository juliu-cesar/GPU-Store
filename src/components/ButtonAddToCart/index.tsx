import { CartContext } from "@/src/Header/components/CartSection/components/CartProvider";
import { useContext } from "react";
import { CardsContext } from "../CardsProvider";
import { TAllCards } from "../TAllCards";

interface BtnAddToCartProps {
  title: string | undefined;
  price: number | undefined;
  productId: string;
  buttonId?: string;
}

export default function ButtonAddToCart({ title, price, productId, buttonId }: BtnAddToCartProps) {
  const allCards = useContext(CardsContext)
  const cartContext = useContext(CartContext);
  const ProductList = cartContext.ProductList;
  const LS = "ProductList";

  function addToCart() {
    let newArr: TAllCards = allCards.allCards;
    let newProductList: TAllCards = JSON.parse(JSON.stringify(ProductList));

    newArr = newArr.filter((el) => {
      return el.id == productId;
    });

    if (ProductList.length > 0) {
      if (ProductList.length >= 10) return;
      let index = newProductList.findIndex((e) => {
        return e.id == productId;
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
        ga4_addToCartEvent()
      }
    } else {
      newArr[0].amount = 1;

      newProductList.push(newArr[0]);
      addProductLS(newProductList);
      ga4_addToCartEvent()
    }
  }
  function ga4_addToCartEvent() {
    gtag("event", "add_to_cart", {
      currency: "BRL",
      value: price,
      items: [
        {
          item_id: `GPS_${productId}`,
          item_name: title,
          affiliation: "GU Store",
          item_category: "board",
          price: price,
        }
      ]
    });
  }
  function addProductLS(pL: TAllCards) {
    cartContext.setProductList(pL);
    localStorage.setItem(LS, JSON.stringify(pL));
  }
  return (
    <button id={buttonId || "page-add_to_cart"} className="add_cart" onClick={addToCart}>
      Adicionar ao carrinho
    </button>
  )
}