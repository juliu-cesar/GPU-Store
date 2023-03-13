import { StyledCarouselHome } from "./components/StyledCarouselHome";
import carouselHome from "@/carouselHome.json";
import { useEffect, useState } from "react";

export default function CarouselHome() {
  const [SelectCard, setSelectCard] = useState(0);

  useEffect(() => {
    let time: NodeJS.Timeout | null = setTimeout(() => {
      let num = SelectCard == 0 ? 1 : 0;
      toggleCard(num);
      setSelectCard(num);
    }, 3000);
    return () => {
      clearTimeout(time!);
      time = null;
    };
  }, [SelectCard]);

  function toggleCard(num: number) {
    const carousel = document.querySelector(".carousel_home") as HTMLElement;

    carousel.style.transform = `translateX(calc((-100% / ${2}) * ${num}))`;
  }
  return (
    <StyledCarouselHome>
      <span className="backgroundBar"></span>
      <div className="container_carousel">
        <div className="frame_carousel">
          <div className="carousel_home">
            {carouselHome.cards.map((el, index) => {
              return (
                <div className="card_carousel" key={index}>
                  <div className="frame_title">
                    <h2>{el.title}</h2>
                    <h3>{el.subtitle}</h3>
                  </div>
                  <div className="frame_img">
                    <img src={el.imgUrl} alt="Banner placas de video" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledCarouselHome>
  );
}
