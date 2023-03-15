import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import SearchHeader from "./components/SearchHeader";
import GPUCard from "@/GPUCard.json";
import { StyledSearch } from "./components/StyledSearch";
import { TGpuCard } from "../components/TGpuCard";
import { SearchItens } from "./components/SearchItens";
import { TFilter } from "./components/TFilter";

export default function SearchPage() {
  const [allCards, setAllCards] = useState<TGpuCard | undefined>(undefined);
  const [selectedOrder, setSelectedOrder] = useState("relevance");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [showSearchContent, setShowSearchContent] = useState(false);

  const [price, setPrice] = useState([0, 20000]);
  const [filter, setFilter] = useState<TFilter>({
    filterBrand: undefined,
    filterMemory: undefined,
    filterRay: undefined,
  });

  useEffect(() => {
    if (showSearchContent) return;
    setAllCards(sortCards(GPUCard.gpuList, selectedOrder));
  }, [GPUCard, showSearchContent]);

  useEffect(() => {
    if (!allCards) return;
    setAllCards(sortCards(allCards, selectedOrder));
  }, [allCards]);

  function searchBar() {
    if (!GPUCard.gpuList) return;
    let newArr = SearchItens(GPUCard.gpuList, search);

    if (search.trim() == "") {
      setAllCards(GPUCard.gpuList);
      setShowSearchContent(false);
    } else {
      setAllCards(newArr);
      setShowSearchContent(true);
      setSearchText(search);
      setSearch("");
    }
  }

  function sortCards(gpuCard: TGpuCard, order: string): TGpuCard {
    let newArr: TGpuCard = JSON.parse(JSON.stringify(gpuCard));

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
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
          search={search}
          setSearch={setSearch}
          searchBar={searchBar}
        />
        <div id="filter_products">
          <Filter
            price={price}
            setPrice={setPrice}
            filter={filter}
            setFilter={setFilter}
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
