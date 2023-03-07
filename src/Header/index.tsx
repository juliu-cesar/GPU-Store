import Link from "next/link";
import { StyledHover } from "../components/StyledHover";
import Cart from "./components/Cart";
import { StyledHeader } from "./components/StyledHeader";

interface Props{
  cartType: number
}
export default function Header({cartType}: Props) {
  return (
    <StyledHeader>
      <div className="container_header">
        <div className="Logo">
          <h3 className="GPU">GPU</h3>
          <h3 className="Store">Store</h3>
        </div>
        <div className="right">
          <Link href={"/produtos"}><StyledHover>Produtos</StyledHover></Link>
          <Cart type={cartType} />
        </div>
      </div>
    </StyledHeader>
  );
}