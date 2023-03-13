import Header from "../Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import SearchHeader from "./components/SearchHeader";
import { StyledSearch } from "./components/StyledSearch";

export default function SearchPage(){

  return(
    <StyledSearch>
      <Header cartType={0}/>
      <div className="container">
          <SearchHeader />
        <div id="filter_products">
          <Filter />
          <ProductList />
        </div>
      </div>
    </StyledSearch>
  )
}