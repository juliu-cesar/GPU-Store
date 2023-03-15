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
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [showSearchItens, setShowSearchItens] = useState(false);

  useEffect(() => {
    if (showSearchItens) return;
    setAllCards(sortCards(GPUCard.gpuList, selectedOrder));
  }, [GPUCard, showSearchItens]);

  useEffect(() => {
    if (!allCards) return;
    setAllCards(sortCards(allCards, selectedOrder));
  }, [allCards]);

  function searchBar() {
    if (!GPUCard.gpuList) return;
    let newArr = SearchItens(GPUCard.gpuList, search);

    if (search.trim() == "") {
      setAllCards(GPUCard.gpuList);
      setShowSearchItens(false);
    } else {
      setAllCards(newArr);
      setShowSearchItens(true);
      setSearchText(search);
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
          <Filter />
          <div className="product_and_search">
            {showSearchItens && (
              <div className="searched_itens">
                <h4>
                  <span className="small">Você pesquisou por:</span>{" "}
                  {searchText}
                </h4>
                <button onClick={() => setShowSearchItens(false)}>
                  <img
                    src="img/icons/svg/close.svg"
                    alt="ícone fechar pesquisa"
                  />
                </button>
              </div>
            )}
            <ProductList allCards={allCards} />
          </div>
        </div>
      </div>
      <Footer />
    </StyledSearch>
  );
}
