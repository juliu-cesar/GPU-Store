import { StyledSearchedBoards } from "./components/StyledSearchedBoards";
import GPUCard from "@/GPUCard.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TGpuCard } from "../TGpuCard";

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
          {fourCards && fourCards.map((e, i) => {
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
                    <span>
                      <h3>R$ {e.price}</h3>
                      <p className="small2">
                        {" "}
                        em até 12X de R$ {installmentPrice.replace(
                          ".",
                          ","
                        )}{" "}
                        sem juros
                      </p>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </StyledSearchedBoards>
  );
}