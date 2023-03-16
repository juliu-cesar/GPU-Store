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

export default function SearchPage() {
  const [allCards, setAllCards] = useState<TGpuCard | undefined>(undefined);
  const [selectedOrder, setSelectedOrder] = useState("relevance");  
  const [searchText, setSearchText] = useState("");
  const [showSearchContent, setShowSearchContent] = useState(false);
  
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
  const [filterCover, setFilterCover] = useState(false);

  useEffect(() => {
    if (filterBrand != null || filterMemory != null || filterRay != null || price[0] != 0 && price[1] != 20000) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setFilterCover(true);
    }
    let timer: string | number | NodeJS.Timeout | undefined = setTimeout(() => {
      filterCards();
      setFilterCover(false);
    }, 600);
    return () => {
      clearInterval(timer);
      timer = undefined;
    };
  }, [filterBrand, filterMemory, filterRay, price]);

  function filterCards() {
    if (!GPUCard.gpuList) return;
    let newArr = GPUCard.gpuList;

    if (filterBrand) {
      newArr = newArr.filter((el) => el.brand == filterBrand);
    }
    if (filterMemory) {
      newArr = newArr.filter(
        (el) => el.memory >= filterMemory[0] && el.memory <= filterMemory[1]
      );
    }
    if (filterRay != null) {
      if (filterRay) {
        newArr = newArr.filter((el) => el.ray == true);
      }
      if (!filterRay) {
        newArr = newArr.filter((el) => el.ray == false);
      }
    }
    newArr = newArr.filter(
      (el) => el.price >= price[0] && el.price <= price[1]
    );
    setAllCards(sortCards(newArr, selectedOrder));
  }
  return (
    <StyledSearch>
      <Header cartType={0} />
      <div className="container">
        <SearchHeader
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
          allCards={allCards}
          setAllCards={setAllCards}
          setSearchText={setSearchText}
          showSearchContent={showSearchContent}
          setShowSearchContent={setShowSearchContent}
          sortCards={sortCards}
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
      {filterCover && (
        <span className="filter_cover">
          <div className="spin"></div>
        </span>
      )}
    </StyledSearch>
  );
}
