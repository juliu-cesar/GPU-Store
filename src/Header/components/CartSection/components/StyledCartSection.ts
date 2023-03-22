import styled from "styled-components";

export const StyledCartSection = styled.section<{
  show: string;
}>`
  width: 100%;
  .container_cartSection {
    z-index: 100;
    position: fixed;
    background-color: ${({ theme }) => theme.background_base};
    top: 0;
    right: ${({ show }) => show};
    width: 550px;
    max-width: 550px;
    height: 100vh;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .frame_headerCart {
    border-bottom: 2px solid ${({ theme }) => theme.text_color};
    width: 90%;
    padding: 7px;
    margin-top: 25px;
    margin-bottom: 10px;
    h3 {
      font-size: 22px;
      font-weight: 500;
    }
  }
  .frame_itens {
    width: 95%;
    height: 100%;
    align-items: center;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.text_color};
      border-radius: 6px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(70, 70, 70, 0.35);
      border-radius: 6px;
    }
  }
  .CardItem {
    position: relative;
    width: 90%;
    height: 100px;
    min-height: 100px;
    padding: 5px;
    margin-bottom: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.text_color};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    .imgIcon {
      background-color: ${({ theme }) => theme.text_color};
      width: 85px;
      min-width: 85px;
      height: 65px;
      min-height: 65px;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 85%;
      }
    }
    .TitleAndPrice {
      width: 100%;
      height: 90px;
      min-height: 90px;
      padding: 5px 10px;
      justify-content: space-around;
      gap: 2px;
    }
    h4 {
      max-height: 60px;
      font-size: 15px;
      font-weight: 400;
      overflow-wrap: anywhere;
      overflow: hidden;
    }
    h3 {
      margin-left: 10px;
      font-size: 17px;
      font-weight: 500;
    }
    .frame_amount {
      align-items: center;
      .arrowUp, .arrowDown{
        width: 40px;
        min-width: 40px;
        height: 40px;
        min-height: 40px;
        transform: rotate(-90deg);
      }
      .arrowDown{
        transform: rotate(90deg);
      }
      .amount {
        width: 45px;
        min-width: 45px;
        height: 30px;
        border: 1px solid ${({ theme }) => theme.text_color};
        border-radius: 2px;
        font-size: 19px;
        font-weight: 500;
      }
    }
  }
  .frame_footerCart {
    background-color: ${({ theme }) => theme.semi_black};
    width: 85%;
    margin-top: 20px;
    border-radius: 3px;
    align-items: center;
  }
  .paymentForm {
    width: 90%;
    padding: 7px 10px;
    border-bottom: 2px solid ${({ theme }) => theme.text_color};
    h4 {
      font-size: 17px;
      font-weight: 500;
    }
    h3 {
      margin-right: 10px;
      font-size: 19px;
      font-weight: 500;
    }
    img {
      background-color: ${({ theme }) => theme.text_color};
      width: 30px;
      height: 30px;
      padding: 2px;
      border-radius: 5px;
    }
  }
  .totalPrice {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    h4 {
      font-size: 19px;
      font-weight: 500;
    }
    h3 {
      font-size: 22px;
      font-weight: 600;
    }
  }
  .btn_buy {
    background-color: ${({ theme }) => theme.text_color};
    width: 250px;
    height: 80px;
    margin: 15px 0;
    border: unset;
    border-radius: 40px;
    font-size: 22px;
    font-weight: 600;
    transition: all 0.2s;
    :hover {
      box-shadow: 0 0 3px ${({ theme }) => theme.text_color};
    }
  }
  .btn_close {
    position: absolute;
    background-color: ${({ theme }) => theme.text_color};
    top: 5px;
    left: 5px;
    width: 35px;
    min-width: 35px;
    height: 35px;
    min-height: 35px;
    padding: 8px;
    border: unset;
    border-radius: 50%;
    display: none;
    img {
      width: 100%;
      margin-left: 2px;
    }
  }
  .cart_cover {
    z-index: 99;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
  @media (max-width: 600px) {
    .container_cartSection {
      width: 95%;
    }
    .frame_headerCart {
      margin-top: 35px;
    }
    .btn_close {
      display: block;
    }
  }
  @media (max-width: 400px) {
    .frame_headerCart h3 {
      font-size: 17px;
    }
    .CardItem {
      height: 120px;
      min-height: 120px;
      .TitleAndPrice {
        height: 110px;
        min-height: 110px;
      }
      h4 {
        max-height: 80px;
        font-size: 14px;
      }
    }
    .frame_footerCart {
      width: 95%;
    }
    .paymentForm {
      width: 95%;
      padding: 7px 10px;
      h4 {
        font-size: 15px;
        font-weight: 500;
      }
      h3 {
        font-size: 17px;
      }
    }
    .totalPrice {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      h4 {
        font-size: 17px;
        font-weight: 500;
      }
      h3 {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
  @media (max-width: 340px) {
    .CardItem {
      height: 180px;
      min-height: 180px;
      flex-direction: column;
      justify-content: space-around;
      align-items: unset;
      .imgIcon {
        margin: 0 10px;
        img {
          width: 95%;
        }
      }
      .totalPrice {
        h4 {
          max-height: 70px;
        }
        h3 {
          margin-left: 10px;
        }
      }
      .amount {
        position: absolute;
        top: 20px;
        right: 25px;
      }
    }
  }
`;
