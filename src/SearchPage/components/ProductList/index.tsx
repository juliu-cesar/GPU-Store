import { StyledProductList } from "./components/StyledProductList";
import CardGpu from "@/src/components/CardGpu";
import { TAllCards } from "@/src/components/TAllCards";
import { Dispatch, SetStateAction } from "react";

interface Props{
  allCards: TAllCards | undefined;
  showSearchContent: boolean;
  setShowSearchContent: Dispatch<SetStateAction<boolean>>;
  searchText: string;
}
export default function ProductList({
  allCards, showSearchContent, setShowSearchContent, searchText
}: Props) {
  return (
    <StyledProductList>
      <div className="container_product">
      {showSearchContent && (
              <div className="searched_itens">
                <div className="Text">
                  <h4>
                    <span className="small">Você pesquisou por:</span>{" "}
                    {searchText}
                  </h4>
                </div>
                <button onClick={() => setShowSearchContent(false)}>
                  <img
                    src="img/icons/svg/close.svg"
                    alt="ícone fechar pesquisa"
                    style={{"maxWidth": "40px"}}
                  />
                </button>
              </div>
            )}
        {allCards && <CardGpu allCards={allCards} />}
      </div>
    </StyledProductList>
  );
}
