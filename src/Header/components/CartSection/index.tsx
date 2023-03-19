import { TGpuCard } from "@/src/components/TGpuCard";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { CartContext } from "./components/CartProvider";
import { StyledCartSection } from "./components/StyledCartSection";

interface Props {
  showCart: boolean;
  showCartSection: boolean;
  setShowCartSection: Dispatch<SetStateAction<boolean>>;
}
export default function CartSection({
  showCart,
  showCartSection,
  setShowCartSection,
}: Props) {
  const cartContext = useContext(CartContext);
  const setProductList = cartContext.setProductList;
  const LS = "ProductList";

  useEffect(() => {
    if (!localStorage.getItem(LS)) return;
    setProductList(JSON.parse(localStorage.getItem(LS)!));
  }, []);

  function changeAmount(num: number, index: number) {
    if (num > 5) return;
    let newProductList: TGpuCard = JSON.parse(
      JSON.stringify(cartContext.ProductList)
    );
    if (num == 0) {
      newProductList = newProductList.filter((e, i) => i != index);
      changeProductLS(newProductList);
    } else {
      newProductList[index].amount = num;
      changeProductLS(newProductList);
    }
  }
  function changeProductLS(pL: TGpuCard) {
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
          {cartContext.ProductList.length > 0 &&
            cartContext.ProductList.map((el, index) => {
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
                  {/* <div className="amount align_center">{el.amount}</div> */}
                  <input
                    type={"number"}
                    className="amount"
                    value={el.amount}
                    onChange={(e) => {
                      changeAmount(Number(e.target.value), index);
                    }}
                  />
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
            <h3>R$ 2789,65</h3>
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
      {showCartSection && (
        <span
          className="cart_cover"
          onClick={() => setShowCartSection(false)}
        ></span>
      )}
    </StyledCartSection>
  );
}
