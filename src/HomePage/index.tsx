import Footer from "../Footer";
import Header from "../Header";
import CarouselHome from "./components/CarouselHome";
import SearchedBoards from "./components/SearchedBoards";
import { StyledHome } from "./components/StyledHome";

export default function HomePage(){

    return(
        <StyledHome>
          <Header cartType={1}/>
          <CarouselHome />
          <SearchedBoards />
          
          <Footer />
        </StyledHome>
    )
}