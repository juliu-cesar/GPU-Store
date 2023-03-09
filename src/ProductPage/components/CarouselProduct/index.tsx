import { useState } from "react";
import { StyledCrProduct } from "./components/StyledCrProduct";

export default function CarouselProduct({
  imgList,
}: {
  imgList: string[] | undefined;
}) {
  const [imageSelect, setImageSelect] = useState(0);
  const [cardSelect, setCardSelect] = useState<number>(0);

  function selectImage(num: number) {
    const carousel_img = document.querySelector(".carousel_img") as HTMLElement;

    if (num == imgList!.length || num < 0) return;
    setImageSelect(num);
    carousel_img.style.left = `calc(-100% * ${num})`;
  }
  function prevNextCard(num: number) {
    if(num < 0 || num > imgList!.length - 4)return
      selectCard(num);
      setCardSelect(num);
  }
  function selectCard(index: number) {
    const carousel_card = document.querySelector(".carousel_card") as HTMLElement;

    carousel_card.style.top = `${-70 * index}px`;
  }
  return (
    <StyledCrProduct imgNum={imgList?.length || 1}>
      <div className="container_cards">
        <div className="arrow_back" onClick={() => prevNextCard(cardSelect -1)}>
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
        <div className="arrow_front" onClick={() => prevNextCard(cardSelect +1)}>
          <img src="../img/icons/svg/arrow-bold.svg" />
        </div>
      </div>
      <div className="frame_carousel_img">
        <span
          className="prev_img"
          onClick={() => selectImage(imageSelect - 1)}
        ></span>
        <div className="carousel_img">
          {imgList &&
            imgList.map((e, i) => {
              return <img src={e} alt="imagem produto" key={i} />;
            })}
        </div>
        <span
          className="next_img"
          onClick={() => selectImage(imageSelect + 1)}
        ></span>
      </div>
    </StyledCrProduct>
  );
}
