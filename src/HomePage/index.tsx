import Header from "../Header";
import { StyledHome } from "./components/StyledHome";

export default function HomePage(){

    return(
        <StyledHome>
          <Header cartType={1}/>
        </StyledHome>
    )
}