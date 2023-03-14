import Link from "next/link";
import { StyledHover } from "../components/StyledHover";
import Cart from "./components/Cart";
import { StyledHeader } from "./components/StyledHeader";

interface Props {
  cartType: number;
}
export default function Header({ cartType }: Props) {
  return (
    <StyledHeader>
      <div className="container_header">
        <div className="Logo">
          <Link href={"/"} style={{ color: "#fff" }}>
            <h3 className="GPU">GPU</h3>
            <h3 className="Store">Store</h3>
          </Link>
        </div>
        <div className="right">
          {/* <a href={"/produtos"} style={{ color: "#fff" }}>
            <h4>
              <StyledHover>Produtos</StyledHover>
            </h4>
          </a> */}
          <Link href={"/produtos"} style={{ color: "#fff" }}>
            <h4>
              <StyledHover>Produtos</StyledHover>
            </h4>
          </Link>
          <Cart type={cartType} />
        </div>
      </div>
    </StyledHeader>
  );
}
