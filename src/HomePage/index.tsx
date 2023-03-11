import Footer from "../Footer";
import Header from "../Header";
import CarouselHome from "./components/CarouselHome";
import { StyledHome } from "./components/StyledHome";

export default function HomePage(){

    return(
        <StyledHome>
          <Header cartType={1}/>
          <CarouselHome />
          
          
          <Footer />
        </StyledHome>
    )
}