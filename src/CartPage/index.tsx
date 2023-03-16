import Footer from "../Footer";
import Header from "../Header";
import { StyledCart } from "./components/StyledCart";

export default function CartPage(){

  return(
    <StyledCart>
      <Header cartType={2} />

    <Footer />
    </StyledCart>
  )
}