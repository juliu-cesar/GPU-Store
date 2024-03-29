import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { StyledSearchHeader } from "./components/StyledSearchHeader";
import { SearchItens } from "../SearchItens";
import { CardsContext } from "@/src/provider/CardsProvider";
import { TAllCards } from "@/src/provider/TAllCards";

const order = [
  { name: "Mais relevantes", value: "relevance" },
  { name: "Melhor avaliado", value: "rating" },
  { name: "Menor preço", value: "price-down" },
  { name: "Maior preço", value: "price-up" },
];

interface Props {
  allCards: TAllCards | undefined; 
  setAllCards: Dispatch<SetStateAction<TAllCards | undefined>>;
  selectedOrder: string;
  setSelectedOrder: Dispatch<SetStateAction<string>>;
  showSearchContent: boolean; 
  setShowSearchContent: Dispatch<SetStateAction<boolean>>;
  setSearchText: Dispatch<SetStateAction<string>>;
  sortCards: (gpuCard: TAllCards, order: string) => TAllCards
}
export default function SearchHeader({
  allCards, 
  setAllCards,
  selectedOrder,
  setSelectedOrder,
  showSearchContent, 
  setShowSearchContent,
  setSearchText,
  sortCards
}: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const allGpuCards = useContext(CardsContext)

  useEffect(() => {
    if (showSearchContent) return;
    setAllCards(sortCards(allGpuCards.allCards, selectedOrder));
  }, [showSearchContent]);
  useEffect(() => {
    if (!allCards) return;
    setAllCards(sortCards(allCards, selectedOrder));
  }, [selectedOrder]);

  function searchBar() {
    if (!allGpuCards.allCards) return;
    let newArr = SearchItens(allGpuCards.allCards, search);

    if (search.trim() == "") {
      setAllCards(sortCards(allGpuCards.allCards, selectedOrder));
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
