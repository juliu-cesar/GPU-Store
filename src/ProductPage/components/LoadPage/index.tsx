import { StyledLoadPage } from "./components/StyledLoadPage";

export default function LoadPage() {
  return (
    <StyledLoadPage>
      <div className="container_cards">
        <div className="frame_icons">
          <div className="arrow_back"></div>
          <div className="frame_carousel_card">
            <div className="carousel_card">
              <div className="img_icon"></div>
              <div className="img_icon"></div>
              <div className="img_icon"></div>
              <div className="img_icon"></div>
            </div>
          </div>
          <div className="arrow_front"></div>
        </div>
        <div className="frame_carousel_img">
          <div>
            <div className="carousel_img"></div>
          </div>
        </div>
      </div>
      <div className="container_loadPrice">
        <div className="frame_title">
          <h2></h2>
          <h3></h3>
          <ul>
            <li style={{ width: "150px" }}></li>
            <li style={{ width: "130px" }}></li>
            <li style={{ width: "170px" }}></li>
            <li style={{ width: "120px" }}></li>
          </ul>
        </div>
        <div className="frame_price">
          <div className="cash_price">
            <h3></h3>
            <p></p>
          </div>
          <div className="installment_price">
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div className="buttons">
          <div className="add_cart"></div>
        </div>
      </div>
    </StyledLoadPage>
  );
}
