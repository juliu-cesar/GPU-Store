import { StyledSearchHeader } from "./components/StyledSearchHeader";

export default function SearchHeader() {
  return (
    <StyledSearchHeader className="flex_row">
      <div className="order flex_row">
        <h3>Ordenar por: </h3>
        <div className="dropdown flex_row">
          <h4>Mais relevantes</h4>
          <img
            src="img/icons/svg/dropdown-icon.svg"
            alt="Ícone expandir"
            style={{ width: "25px" }}
          />
        </div>
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
    </StyledSearchHeader>
  );
}
