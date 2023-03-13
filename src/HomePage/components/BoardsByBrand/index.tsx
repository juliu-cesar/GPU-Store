import { useEffect, useState } from "react";
import { TGpuCard } from "../TGpuCard";
import { StyledBoardsByBrand } from "./components/StyledBoardsByBrand";
import GPUCard from "@/GPUCard.json";
import Link from "next/link";
import CardGpu from "@/src/components/CardGpu";

export default function BoardsByBrand() {
  const [brandCard, setBrandCard] = useState<TGpuCard | undefined>(undefined);

  useEffect(() => {
    let newArr = GPUCard.gpuList
      .map((e) => e)
      .filter((e) => e.brand == "amd")
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 2);
    setBrandCard(newArr);
  }, []);
  return (
    <StyledBoardsByBrand>
      <div className="container_brand">
        <div className="banner_brand">
          <div className="frame_amd">
            <img src="img/amd/amd-logo.svg" alt="logo AMD" />
          </div>
          <div className="frame_nvidia">
            <img src="img/nvidia/nvidia-logo.svg" alt="logo NVIDIA" />
          </div>
        </div>
        <div className="frame_boards">
          {brandCard && <CardGpu allCards={brandCard} onlyCash={true} />}
        </div>
      </div>
    </StyledBoardsByBrand>
  );
}
