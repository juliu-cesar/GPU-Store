import { useState } from "react";
import { StyledSearchHeader } from "./components/StyledSearchHeader";

const order = [
  { name: "Mais relevantes", value: 0 },
  { name: "Melhor avaliado", value: 1 },
  { name: "Menor preço", value: 2 },
  { name: "Maior preço", value: 3 },
];

export default function SearchHeader() {
  const [selectedOrder, setSelectedOrder] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  function selectOder(num: number) {
    setSelectedOrder(num);
  }
  return (
    <StyledSearchHeader>
      <div className="container_searchHeader flex_row">
        <div className="order flex_row">
          <h3>Ordenar por: </h3>
          <div
            className="dropdown flex_row"
            onClick={() => {
              setShowDropdown(showDropdown ? false : true);
            }}
          >
            <h4>{order[selectedOrder].name}</h4>
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
                        selectOder(el.value);
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
          />
          <button>
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
