import Link from "next/link";
import { useState } from "react";
import { StyledHover } from "../components/StyledHover";
import CartSection from "./components/CartSection";
import { StyledHeader } from "./components/StyledHeader";

interface Props {
  cartType: number;
}
export default function Header({ cartType }: Props) {
  const [showCartSection, setShowCartSection] = useState(false);

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
          {cartType != 2 && (
            <div
              className="cart_button"
              onClick={() => setShowCartSection(true)}
            >
              <StyledHover>
                {cartType == 1 && <h3>Carrinho</h3>}
                <div>
                  <img
                    src="../img/icons/cart-icon.png"
                    alt="ícone carrinho de compras"
                    style={{ width: "18px" }}
                  />{" "}
                  0
                </div>
              </StyledHover>
            </div>
          )}
        </div>
      </div>
      <CartSection
        showCart={showCartSection}
        showCartSection={showCartSection}
        setShowCartSection={setShowCartSection}
      />
    </StyledHeader>
  );
}
