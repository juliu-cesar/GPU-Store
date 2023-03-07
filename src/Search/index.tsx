import Header from "../Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import SearchHeader from "./components/SearchHeader";
import { StyledSearch } from "./components/StyledSearch";

export default function Search(){

  return(
    <StyledSearch>
      <Header cartType={0}/>
      <div className="container">
        <div id="Search_container">
          <SearchHeader />
        </div>
        <div className="flex_row">
          <Filter />
          <ProductList />
        </div>
      </div>
    </StyledSearch>
  )
}