import { TAllCards } from "@/src/components/TAllCards";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartContext } from "./components/CartProvider";
import { StyledCartSection } from "./components/StyledCartSection";

interface Props {
  showCart: boolean;
  setShowCartSection: Dispatch<SetStateAction<boolean>>;
}
export default function CartSection({
  showCart,
  setShowCartSection,
}: Props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartContext = useContext(CartContext);
  const productList = cartContext.ProductList;
  const setProductList = cartContext.setProductList;
  const LS = "ProductList";

  useEffect(() => {
    if (!localStorage.getItem(LS)) return;
    setProductList(JSON.parse(localStorage.getItem(LS)!));
  }, []);
  useEffect(() => {
    if (!productList) return;
    let total = 0;
    productList.forEach((e) => {
      let value = e.price * 0.9 * e.amount!;
      total += value;
    });
    setTotalPrice(total);
  }, [productList]);
  useEffect(() => {
    if (showCart) ga4_viewCartEvent()
  }, [showCart]);

  function ga4_viewCartEvent() {
    if (!localStorage.getItem(LS)) return;
    gtag("event", "view_cart", {
      currency: "BRL",
      value: totalPrice,
      items: productList.map(item => {
        return {
          item_id: item.id,
          item_name: item.title,
          affiliation: "GU Store",
          item_category: "board",
          price: item.price,
        }
      })
    });
  }

  function changeAmount(num: number, index: number) {
    if (num > 5) return;
    let newProductList: TAllCards = JSON.parse(JSON.stringify(productList));
    if (num == 0) {
      newProductList = newProductList.filter((e, i) => i != index);
      changeProductLS(newProductList);
    } else {
      newProductList[index].amount = num;
      changeProductLS(newProductList);
    }
  }
  function changeProductLS(pL: TAllCards) {
    setProductList(pL);
    localStorage.setItem(LS, JSON.stringify(pL));
  }
  return (
    <StyledCartSection show={showCart ? "0" : "-551px"}>
      <div className="container_cartSection">
        <div className="frame_headerCart flex_row">
          <h3>Itens</h3>
          <h3>Quantidade</h3>
        </div>
        <div className="frame_itens flex_column">
          {productList.length > 0 &&
            productList.map((el, index) => {
              const cashPrice = (el.price * 0.9).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              });
              return (
                <div className="CardItem" key={index}>
                  <div className="imgIcon align_center">
                    <img src={"../" + el.img} style={{ maxWidth: "150px" }} />
                  </div>
                  <div className="TitleAndPrice flex_column">
                    <h4>{el.title}</h4>
                    <h3>{cashPrice}</h3>
                  </div>
                  <div className="frame_amount flex_column">
                    <span className="arrowUp align_center" onClick={() => { changeAmount(el.amount! + 1, index) }}>
                      <img
                        src="../img/icons/svg/arrow-bold-white.svg"
                        style={{ maxWidth: "20px" }}
                      />
                    </span>
                    <div className="amount align_center">{el.amount}</div>
                    <span className="arrowDown align_center" onClick={() => { changeAmount(el.amount! - 1, index) }}>
                      <img
                        src="../img/icons/svg/arrow-bold-white.svg"
                        style={{ maxWidth: "20px" }}
                      />
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="frame_footerCart flex_column">
          <div className="paymentForm flex_row">
            <h4>Forma de pagamento</h4>
            <div className="flex_row">
              <h3>Pix</h3>
              <img
                src="../img/icons/svg/pix-icon-only.svg"
                alt="ícone Pix"
                style={{ maxWidth: "50px" }}
              />
            </div>
          </div>
          <div className="totalPrice flex_row">
            <h4>Total:</h4>
            <h3>{totalPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}</h3>
          </div>
        </div>
        <button className="btn_buy">Finalizar Compra</button>
        <button className="btn_close" onClick={() => setShowCartSection(false)}>
          <img
            src="../img/icons/svg/arrow-bold.svg"
            alt="ícone"
            style={{ maxWidth: "40px" }}
          />
        </button>
      </div>
      {showCart && (
        <span
          className="cart_cover"
          onClick={() => setShowCartSection(false)}
        ></span>
      )}
    </StyledCartSection>
  );
}
