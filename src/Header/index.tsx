import Link from "next/link";
import { StyledHover } from "../components/StyledHover";
import CartHeader from "./components/CartHeader";
import { StyledHeader } from "./components/StyledHeader";

interface Props {
  cartType: number;
}
export default function Header({ cartType }: Props) {
  return (
    <StyledHeader>
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
          {cartType != 2 && <Link href={"/carrinho"} style={{ color: "#fff" }}>
            <CartHeader type={cartType} />
          </Link>}
        </div>
      </div>
    </StyledHeader>
  );
}
