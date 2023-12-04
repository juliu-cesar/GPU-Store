import { TAllCards } from "@/src/components/TAllCards";
import Link from "next/link";
import { StyledCardGpu } from "./components/StyledCardGpu";
import ButtonAddToCart from "../ButtonAddToCart";

interface Props {
  allCards: TAllCards;
  onlyCash?: boolean;
}
export default function CardGpu({ allCards, onlyCash = false }: Props) {
  return (
    <StyledCardGpu>
      {allCards.map((e, i) => {
        const cashPrice = (e.price * 0.9).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
        const installmentPrice = (e.price / 12).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
        const url = `/produto/${e.title.replace(/[\s/]+/g, "-") + e.id}`;
        return (
          <div className="cardGpu" key={i}>
            <Link href={url}>
              <div className="frame_img">
                <img src={e.img} style={{ maxWidth: "300px" }} />
              </div>
              <div className="frame_content">
                <h4>{e.title}</h4>
                <h3 className="color1">R$ {cashPrice}</h3>
                <p className="small2">no PIX com 10% desconto</p>
                {!onlyCash && (
                  <span>
                    <h3>
                      R${" "}
                      {e.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h3>
                    <p className="small2">
                      {" "}
                      em até 12X de R$ {installmentPrice} sem juros
                    </p>
                  </span>
                )}
              </div>
            </Link>
            <ButtonAddToCart productId={e.id} buttonId="card-add_to_cart" />
          </div>
        );
      })}
    </StyledCardGpu>
  );
}
