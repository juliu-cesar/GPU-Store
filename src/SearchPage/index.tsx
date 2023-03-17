import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import SearchHeader from "./components/SearchHeader";
import { StyledSearch } from "./components/StyledSearch";
import { TGpuCard } from "../components/TGpuCard";

export default function SearchPage() {
  const [allCards, setAllCards] = useState<TGpuCard | undefined>(undefined);
  const [selectedOrder, setSelectedOrder] = useState("relevance");
  const [showSearchContent, setShowSearchContent] = useState(false);
  const [searchText, setSearchText] = useState("");

  function sortCards(gpuCard: TGpuCard, order: string): TGpuCard {
    let newArr: TGpuCard = gpuCard

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
