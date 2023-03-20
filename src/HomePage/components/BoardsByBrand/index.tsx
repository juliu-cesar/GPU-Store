import { useEffect, useState } from "react";
import { TGpuCard } from "../../../components/TGpuCard";
import { StyledBoardsByBrand } from "./components/StyledBoardsByBrand";
import GPUCard from "@/GPUCard.json";
import CardGpu from "@/src/components/CardGpu";

export default function BoardsByBrand() {
  const [amdCard, setAmdCard] = useState<TGpuCard | undefined>(undefined);
  const [nvidiaCard, setNvidiaCard] = useState<TGpuCard | undefined>(undefined);
  const [toggleBrand, setToggleBrand] = useState(false);

  useEffect(() => {
    setAmdCard(filterByBrand("amd"));
    setNvidiaCard(filterByBrand("nvidia"));
  }, []);
  function filterByBrand(brand: string): TGpuCard {
    let nerArr = GPUCard.gpuList
      .map((e) => e)
      .filter((e) => e.brand == brand)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 2);
    return nerArr;
  }

  useEffect(() => {
    let time: NodeJS.Timeout | null = setTimeout(() => {
      setToggleBrand(toggleBrand ? false : true)
      toggleCard(toggleBrand);
    }, 8000);
    return () => {
      clearTimeout(time!);
      time = null;
    };
  }, [toggleBrand]);

  function toggleCard(boo: boolean){
    const amdCard = document.querySelector(".Amd") as HTMLElement;
    const nvidiaCard = document.querySelector(".Nvidia") as HTMLElement;

    amdCard.style.opacity = boo ? "1" : "0"
    nvidiaCard.style.opacity = boo ? "0" : "1"
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
