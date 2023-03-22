import { StyledLoadPage } from "./components/StyledLoadPage";

export default function LoadPage() {

  return (
    <StyledLoadPage>
      <div className="container_cards">
        <div className="frame_icons">
          <div
            className="arrow_back"
          >
          </div>
          <div className="frame_carousel_card">
            <div className="carousel_card">
              <div className="img_icon"></div>
              <div className="img_icon"></div>
              <div className="img_icon"></div>
              <div className="img_icon"></div>
            </div>
          </div>
          <div
            className="arrow_front"
          >
          </div>
        </div>
        <div className="frame_carousel_img">
          <div>
            <div className="carousel_img">
            </div>
          </div>
        </div>
      </div>
    </StyledLoadPage>
  );
}
