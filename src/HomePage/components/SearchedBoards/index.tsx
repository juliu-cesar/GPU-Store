import { StyledSearchedBoards } from "./components/StyledSearchedBoards";
import GPUCard from "@/GPUCard.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TGpuCard } from "../../../components/TGpuCard";
import CardGpu from "@/src/components/CardGpu";

export default function SearchedBoards() {
  const [fourCards, setFourCards] = useState<TGpuCard | undefined>(undefined);

  useEffect(() => {
    let newArr = GPUCard.gpuList
      .map((e) => e)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 4);
    setFourCards(newArr);
  }, []);

  return (
    <StyledSearchedBoards>
      <div className="container_Searched">
        <h4>As placas mais procuradas:</h4>
        <div className="frame_boards">
          {fourCards && <CardGpu allCards={fourCards} onlyCash={false} />}
        </div>
      </div>
    </StyledSearchedBoards>
  );
}
