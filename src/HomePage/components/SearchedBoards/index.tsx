import { StyledSearchedBoards } from "./components/StyledSearchedBoards";
import { useContext, useEffect, useState } from "react";
import { TAllCards } from "../../../provider/TAllCards";
import CardGpu from "@/src/components/CardGpu";
import { CardsContext } from "@/src/provider/CardsProvider";

export default function SearchedBoards() {
  const [fourCards, setFourCards] = useState<TAllCards | undefined>(undefined);
  const allCards = useContext(CardsContext)

  useEffect(() => {
    if(!allCards)return
    let newArr = allCards.allCards
      .map((e) => e)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 4);
    setFourCards(newArr);
  }, [allCards]);

  return (
    <StyledSearchedBoards>
      <div className="container_Searched">
        <h4>As placas mais procuradas:</h4>
        <div className="frame_boards">
          {fourCards && <CardGpu allCards={fourCards} />}
        </div>
      </div>
    </StyledSearchedBoards>
  );
}
