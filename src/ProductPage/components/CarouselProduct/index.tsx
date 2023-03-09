import { useState } from "react";
import styled from "styled-components";
import { StyledCrProduct } from "./components/StyledCrProduct";

export default function CarouselProduct({
  imgList,
}: {
  imgList: string[] | undefined;
}) {
  const [imageSelect, setImageSelect] = useState(0);
  const [cardSelect, setCardSelect] = useState<number>(0);

  function selectImage(num: number) {
    const carousel_img = document.querySelector(".carousel_img") as HTMLElement
    setImageSelect(num);

    carousel_img.style.left = `calc(-100% * ${num})`;
  }
  function prevNextCard(num: number) {
    let index = cardSelect + num;
    if(num < 0 && cardSelect != 0){
      selectCard(index)
      setCardSelect(index)
    }
    if(num > 0 && imgList!.length - 4 != cardSelect){
      selectCard(index)
      setCardSelect(index)
    }
  }
  function selectCard(index: number){
    const carousel = document.querySelector(".carousel_card") as HTMLElement
    
    carousel.style.top = `${-70 * index}px`

  }
  return (
    <StyledCrProduct imgNum={imgList?.length || 1}>
      <div className="container_cards">
        <div className="arrow_back" onClick={() => prevNextCard(-1)}>
          <img src="../img/icons/svg/arrow-bold.svg" />
        </div>
        <div className="frame_carousel_card">
          <div className="carousel_card">
            {imgList &&
              imgList.map((el, i) => {
                return (
                  <button key={i} onClick={() => selectImage(i)}>
                    <img src={el} alt="ícone produto" />
                  </button>
                );
              })}
          </div>
        </div>
        <div className="arrow_front" onClick={() => prevNextCard(+1)}>
          <img src="../img/icons/svg/arrow-bold.svg" />
        </div>
      </div>
      <div className="frame_carousel_img">
        <div className="carousel_img">
          {imgList &&
            imgList.map((e, i) => {
              return <img src={e} alt="imagem produto" key={i} />;
            })}
        </div>
      </div>
    </StyledCrProduct>
  );
}
