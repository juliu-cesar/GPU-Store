import { useContext, useEffect, useState } from "react";
import { StyledBoardsByBrand } from "./components/StyledBoardsByBrand";
import CardGpu from "@/src/components/CardGpu";
import { CardsContext } from "@/src/provider/CardsProvider";
import { TAllCards } from "@/src/provider/TAllCards";

export default function BoardsByBrand() {
  const [amdCard, setAmdCard] = useState<TAllCards | undefined>(undefined);
  const [nvidiaCard, setNvidiaCard] = useState<TAllCards | undefined>(
    undefined
  );
  const [toggleBrand, setToggleBrand] = useState(false);
  const allCards = useContext(CardsContext);

  useEffect(() => {
    if (!allCards.allCards) return;
    setAmdCard(filterByBrand("amd"));
    setNvidiaCard(filterByBrand("nvidia"));
  }, [allCards.allCards]);
  function filterByBrand(brand: string): TAllCards {
    let nerArr = allCards.allCards
      .map((e) => e)
      .filter((e) => e.brand == brand)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 2);
    return nerArr;
  }

  useEffect(() => {
    let time: NodeJS.Timeout | null = setTimeout(() => {
      setToggleBrand(toggleBrand ? false : true);
      toggleCard(toggleBrand);
    }, 6000);
    return () => {
      clearTimeout(time!);
      time = null;
    };
  }, [toggleBrand]);

  function toggleCard(boo: boolean) {
    const amdCard = document.querySelector(".Amd") as HTMLElement;
    const nvidiaCard = document.querySelector(".Nvidia") as HTMLElement;

    amdCard.style.opacity = boo ? "1" : "0";
    nvidiaCard.style.opacity = boo ? "0" : "1";
  }

  return (
    <StyledBoardsByBrand>
      <div className="container_brand">
        <div className="banner_brand">
          <div className="Amd">
            <img src="img/amd/amd-logo.svg" alt="logo AMD" />
          </div>
          <div className="Nvidia">
            <img src="img/nvidia/nvidia-logo.svg" alt="logo NVIDIA" />
          </div>
        </div>
        <div className="frame_boards">
          {!toggleBrand
            ? amdCard && <CardGpu allCards={amdCard} onlyCash={true} />
            : nvidiaCard && <CardGpu allCards={nvidiaCard} onlyCash={true} />}
        </div>
      </div>
    </StyledBoardsByBrand>
  );
}
