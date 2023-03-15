import { Dispatch, SetStateAction, useState } from "react";
import { StyledSearchHeader } from "./components/StyledSearchHeader";

const order = [
  { name: "Mais relevantes", value: "relevance" },
  { name: "Melhor avaliado", value: "rating" },
  { name: "Menor preço", value: "price-down" },
  { name: "Maior preço", value: "price-up" },
];

interface Props {
  selectedOrder: string;
  setSelectedOrder: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchBar: () => void;
}
export default function SearchHeader({
  selectedOrder,
  setSelectedOrder,
  search,
  setSearch,
  searchBar,
}: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

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
