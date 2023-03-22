import styled from "styled-components";

export const StyledLoadPage = styled.div`
  width: 100%;
  padding: 10px 16px;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  align-items: center;
  gap: 15px;
  .container_cards {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .frame_icons {
    width: 70px;
    min-width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .arrow_back,
    .arrow_front {
      background-color: ${({ theme }) => theme.text_color};
      width: 40px;
      min-width: 40px;
      height: 40px;
      min-height: 40px;
      border-radius: 50%;
      animation: 0.6s bg_color infinite alternate;
    }
  }
  .frame_carousel_card {
    width: 100%;
    height: 275px;
  }
  .carousel_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .img_icon {
      background-color: ${({ theme }) => theme.text_color};
      width: 60px;
      height: 60px;
      padding: 3px;
      border-radius: 10px;
      animation: 0.6s bg_color infinite alternate;
    }
  }
  .frame_carousel_img {
    background-color: ${({ theme }) => theme.text_color};
    width: 100%;
    height: 450px;
    border-radius: 15px;
    animation: 0.6s bg_color infinite alternate;
  }
  /*-------------------------------------------------------*/
  .container_loadPrice {
    width: 100%;
    padding-right: 20px;
  }
  .frame_title {
    width: 100%;
    h2 {
      background-color: ${({ theme }) => theme.text_color};
      width: 100%;
      height: 26px;
      border-radius: 13px;
      margin-bottom: 7px;
      animation: 0.6s bg_color infinite alternate;
    }
    h3 {
      background-color: ${({ theme }) => theme.text_color};
      width: 80%;
      height: 26px;
      border-radius: 13px;
      animation: 0.6s bg_color infinite alternate;
    }
    ul {
      margin: 20px;
      list-style: none;
      li {
        background-color: ${({ theme }) => theme.text_color};
        height: 18px;
        margin: 15px 0;
        border-radius: 9px;
        animation: 0.6s bg_color infinite alternate;
      }
    }
  }
  .frame_price {
    .cash_price {
      h3 {
        background-color: ${({ theme }) => theme.text_color};
        width: 150px;
        height: 36px;
        margin-top: 25px;
        border-radius: 18px;
        animation: 0.6s bg_color infinite alternate;
      }
      p {
        background-color: ${({ theme }) => theme.text_color};
        width: 200px;
        height: 14px;
        margin-top: 7px;
        border-radius: 7px;
        animation: 0.6s bg_color infinite alternate;
      }
      margin-bottom: 20px;
    }
    .installment_price {
      margin-bottom: 20px;
      opacity: 0.7;
      h3 {
        background-color: ${({ theme }) => theme.text_color};
        width: 120px;
        height: 26px;
        margin-top: 25px;
        border-radius: 18px;
        animation: 0.6s bg_color infinite alternate;
      }
      p {
        background-color: ${({ theme }) => theme.text_color};
        width: 150px;
        height: 12px;
        margin-top: 5px;
        border-radius: 6px;
        animation: 0.6s bg_color infinite alternate;
      }
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    .add_cart {
      background-color: ${({ theme }) => theme.text_color};
      width: 150px;
      height: 44px;
      border-radius: 22px;
      animation: 0.6s bg_color infinite alternate;
    }
  }
  @keyframes bg_color {
    0% {
      background-color: ${({ theme }) => theme.text_color};
    }
    50% {
      background-color: #d2d2d2;
    }
    100% {
      background-color: #acacac;
    }
  }
  @media (max-width: 920px) {
    .frame_carousel_img {
      height: 400px;
    }
    .carousel_img img {
      max-height: 400px;
    }
  }
  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 10px 20px;
    .frame_carousel_img {
      height: 450px;
    }
    .carousel_img img {
      max-height: 450px;
    }
  }
  @media (max-width: 670px) {
    .frame_carousel_img {
      height: 400px;
    }
    .carousel_img img {
      max-height: 400px;
    }
  }
  @media (max-width: 470px) {
    padding: 10px;
  }
  @media (max-width: 370px) {
    .frame_carousel_img {
      height: 350px;
    }
    .carousel_img img {
      max-height: 350px;
    }
    .frame_icons {
      display: none;
    }
  }
`;
