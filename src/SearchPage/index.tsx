import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import SearchHeader from "./components/SearchHeader";
import { StyledSearch } from "./components/StyledSearch";
import { TAllCards } from "../components/TAllCards";

export default function SearchPage() {
  const [allCards, setAllCards] = useState<TAllCards | undefined>(undefined);
  const [selectedOrder, setSelectedOrder] = useState("relevance");
  const [showSearchContent, setShowSearchContent] = useState(false);
  const [searchText, setSearchText] = useState("");

  function sortCards(gpuCard: TAllCards, order: string): TAllCards {
    let newArr: TAllCards = gpuCard

    if (order == "price-up" || order == "price-down") {
      newArr.sort((a, b) =>
        order == "price-up" ? b.price - a.price : a.price - b.price
      );
    } else {
      newArr.sort(
        (a, b) =>
          (b[order as keyof typeof b] as number) -
          (a[order as keyof typeof a] as number)
      );
    }
    return newArr;
  }
  return (
    <StyledSearch>
      <Header cartType={0} />
      <div className="container">
        <SearchHeader
          allCards={allCards}
          setAllCards={setAllCards}
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
          showSearchContent={showSearchContent}
          setShowSearchContent={setShowSearchContent}
          setSearchText={setSearchText}
          sortCards={sortCards}
        />
        <div id="filter_products">
          <Filter
            setAllCards={setAllCards}
            sortCards={sortCards}
            selectedOrder={selectedOrder}
          />
          <div className="product_and_search">
            <ProductList
              allCards={allCards}
              showSearchContent={showSearchContent}
              setShowSearchContent={setShowSearchContent}
              searchText={searchText}
            />
          </div>
        </div>
      </div>
      <Footer />
    </StyledSearch>
  );
}
