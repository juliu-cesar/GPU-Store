import { TGpuCard } from "@/src/components/TGpuCard";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyledSearchHeader } from "./components/StyledSearchHeader";
import GPUCard from "@/GPUCard.json";
import { SearchItens } from "../SearchItens";

const order = [
  { name: "Mais relevantes", value: "relevance" },
  { name: "Melhor avaliado", value: "rating" },
  { name: "Menor preço", value: "price-down" },
  { name: "Maior preço", value: "price-up" },
];

interface Props {
  selectedOrder: string;
  setSelectedOrder: Dispatch<SetStateAction<string>>;
  showSearchContent: boolean; 
  setShowSearchContent: Dispatch<SetStateAction<boolean>>;
  allCards: TGpuCard | undefined; 
  setAllCards: Dispatch<SetStateAction<TGpuCard | undefined>>;
  setSearchText: Dispatch<SetStateAction<string>>;
  sortCards: (gpuCard: TGpuCard, order: string) => TGpuCard
}
export default function SearchHeader({
  selectedOrder,
  setSelectedOrder,
  showSearchContent, 
  setShowSearchContent,
  allCards, 
  setAllCards,
  setSearchText,
  sortCards
}: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");

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
  function chooseOrder(tx: string) {
    setSelectedOrder(tx);
  }
  return (
    <StyledSearchHeader>
      <div className="container_searchHeader">
        <div className="order">
          <div
            className="dropdown flex_row"
            onClick={() => {
              setShowDropdown(showDropdown ? false : true);
            }}
          >
            <h4>{order.find((e) => e.value == selectedOrder)?.name}</h4>
            <img
              src="img/icons/svg/dropdown-icon.svg"
              alt="Ícone expandir"
              style={{ width: "25px" }}
            />
            {showDropdown && (
              <div className="dropdown_menu">
                {order.map((el, index) => {
                  return (
                    <div
                      className="dropdown_item"
                      key={index}
                      onClick={() => {
                        chooseOrder(el.value);
                      }}
                    >
                      {el.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {showDropdown && (
            <span
              className="dropdown_cover"
              onClick={() => setShowDropdown(false)}
            ></span>
          )}
        </div>
        <div className="search">
          <input
            type="text"
            name="in-search"
            id="in-search"
            placeholder="Pesquisar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key != "Enter") return;
              searchBar();
            }}
          />
          <button onClick={() => searchBar()}>
            <img
              src="img/icons/svg/search-icon.svg"
              alt="Ícone pesquisa"
              style={{ width: "30px" }}
            />
          </button>
        </div>
      </div>
    </StyledSearchHeader>
  );
}
