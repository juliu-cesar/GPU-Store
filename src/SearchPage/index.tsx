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

  useEffect(() => {
    if (showSearchContent) return;
    setAllCards(sortCards(GPUCard.gpuList, selectedOrder));
  }, [GPUCard, showSearchContent]);
  useEffect(() => {
    if (!allCards) return;
    setAllCards(sortCards(allCards, selectedOrder));
  }, [selectedOrder]);

  function searchBar() {
    if (!GPUCard.gpuList) return;
    let newArr = SearchItens(GPUCard.gpuList, search);

    if (search.trim() == "") {
      setAllCards(sortCards(GPUCard.gpuList, selectedOrder));
      setShowSearchContent(false);
    } else {
      setAllCards(sortCards(newArr, selectedOrder));
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

  const [price, setPrice] = useState([0, 20000]);
  const [filterBrand, setFilterBrand] = useState<string | null>(null);
  const [filterMemory, setFilterMemory] = useState<number[] | null>(null);
  const [filterRay, setFilterRay] = useState<boolean | null>(null);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined = setTimeout(() => {
      filterCards();
    }, 1000);
    return () => {
      clearInterval(timer);
      timer = undefined;
    };
  }, [filterBrand, filterMemory, filterRay]);

  function filterCards() {
    if (!GPUCard.gpuList) return;
    let newArr = GPUCard.gpuList;

    if (filterBrand) {
    }
    if (filterMemory) {
      newArr = newArr.filter(
        (el) => el.memory >= filterMemory[0] && el.memory <= filterMemory[1]
      );
    }
    setAllCards(sortCards(newArr, selectedOrder));
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
            setFilterBrand={setFilterBrand}
            setFilterMemory={setFilterMemory}
            setFilterRay={setFilterRay}
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
