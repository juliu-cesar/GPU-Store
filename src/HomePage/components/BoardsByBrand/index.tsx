import { useEffect, useState } from "react";
import { TGpuCard } from "../TGpuCard";
import { StyledBoardsByBrand } from "./components/StyledBoardsByBrand";
import GPUCard from "@/GPUCard.json";
import Link from "next/link";

export default function BoardsByBrand(){
  const [brandCard, setBrandCard] = useState<TGpuCard | undefined>(undefined);

  useEffect(() => {
    let newArr = GPUCard.gpuList
      .map((e) => e)
      .filter(e=>e.brand == "amd")
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 2);
      setBrandCard(newArr);
  }, []);
  return(
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
        {brandCard && brandCard.map((e, i) => {
            const price = Number(e.price.replace(",", "."));
            const cashPrice = (price * 0.9).toFixed(2);
            const installmentPrice = (price / 12).toFixed(2);
            const url = `/produtos/${
              e.title.replace(/[\s/]+/g, "-") + "-" + e.id
            }`;
            return (
              <div className="cardGpu" key={i}>
                <Link href={url}>
                  <div className="frame_img">
                    <img src={e.img} style={{ maxWidth: "300px" }} />
                  </div>
                  <div className="frame_content">
                    <h4>{e.title}</h4>
                    <p className="small color1">à vista</p>
                    <h3 className="color1">R$ {cashPrice.replace(".", ",")}</h3>
                    <p className="small2">No pix com 10% de desconto</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>



      </div>
    </StyledBoardsByBrand>
  )
}