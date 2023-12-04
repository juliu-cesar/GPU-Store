import Link from "next/link";
import { useContext, useState } from "react";
import { StyledHover } from "../components/StyledHover";
import CartSection from "./components/CartSection";
import { CartContext } from "./components/CartSection/components/CartProvider";
import { StyledHeader } from "./components/StyledHeader";

interface Props {
  cartType: number;
}
export default function Header({ cartType }: Props) {
  const [showCartSection, setShowCartSection] = useState(false);
  const cartContext = useContext(CartContext);

  return (
    <StyledHeader type={cartType}>
      <div className="container_header">
        <div className="Brand">
          <div className="entire_brand">
            <Link href={"/"} style={{ color: "#fff" }}>
              <h3>GPU</h3>
              <h4>Store</h4>
            </Link>
          </div>
          <div className="short_brand">
            <Link href={"/"} style={{ color: "#fff" }}>
              <h3>G</h3>
              <h4>S</h4>
            </Link>
          </div>
        </div>
        <div className="right">
          <Link href={"/produtos"} style={{ color: "#fff" }}>
            <h4>
              <StyledHover>Produtos</StyledHover>
            </h4>
          </Link>
            <button
              id="cart_button_id"
              className="cart_button"
              onClick={() => setShowCartSection(true)}
            >
              <StyledHover className="cart_button">
                {cartType == 1 && "Carrinho"}                
                  <div className="cart_button count_items">
                    <img
                      src="../img/icons/cart-icon.png"
                      alt="ícone carrinho de compras"
                      style={{ width: "18px" }}
                      className="cart_button"
                    />{" "}
                    {cartContext.ProductList.length}
                  </div>                
              </StyledHover>
            </button>
        </div>
      </div>
      <CartSection
        showCart={showCartSection}
        setShowCartSection={setShowCartSection}
      />
    </StyledHeader>
  );
}
