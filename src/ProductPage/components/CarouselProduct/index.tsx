import { useState } from "react";
import { StyledCrProduct } from "./components/StyledCrProduct";

export default function CarouselProduct({
  imgList,
}: {
  imgList: string[] | undefined;
}) {
  const [selectImage, setSelectImage] = useState(0);

  return (
    <StyledCrProduct imgNum={imgList?.length || 1}>
      <div className="carousel_img">
        {imgList &&
          imgList.map((e, i) => {
            return <img src={e} alt="imagem produto" key={i} />;
          })}
      </div>
      <div className="frame_cards">
        <div className="arrow_back">
          <img src="../img/icons/svg/arrow-bold.svg" />
        </div>
        <div className="frame_carousel_card">
          <div className="carousel_card">
            {imgList &&
              imgList.map((e, i) => {
                return (
                  <span key={i} >
                    <img src={e} alt="imagem produto" />
                  </span>
                );
              })}
          </div>
        </div>
        <div className="arrow_front">
          <img src="../img/icons/svg/arrow-bold.svg" />
        </div>
      </div>
    </StyledCrProduct>
  );
}
