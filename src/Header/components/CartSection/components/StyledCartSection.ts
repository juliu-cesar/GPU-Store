import styled from "styled-components";

export const StyledCartSection = styled.section`
  width: 100%;
  .container_cartSection {
    z-index: 100;
    position: fixed;
    background-color: ${({ theme }) => theme.background_base};
    top: 0;
    right: 0;
    width: 550px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
    width: 100%;
    height: 100%;
    align-items: center;
    overflow-y: auto;
  }
  .CardItem {
    border-bottom: 2px solid ${({ theme }) => theme.text_color};
    width: 85%;
    height: 100px;
    min-height: 100px;
    padding: 5px;
    margin-bottom: 10px;
    overflow: hidden;
    .imgIcon {
      background-color: ${({ theme }) => theme.text_color};
      width: 85px;
      min-width: 85px;
      height: 65px;
      min-height: 65px;
      border-radius: 5px;
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
      h4 {
        max-height: 60px;
        font-size: 15px;
        font-weight: 400;
        overflow: hidden;
      }
      h3 {
        margin-left: 10px;
        font-size: 17px;
        font-weight: 500;
      }
    }
    .amount {
      width: 40px;
      min-width: 40px;
      height: 30px;
      border: 1px solid ${({ theme }) => theme.text_color};
      border-radius: 2px;
      font-size: 19px;
      font-weight: 500;
    }
  }
  .frame_footerCart {
    background-color: ${({ theme }) => theme.semi_black};
    width: 85%;
    height: 150px;
    margin-top: 20px;
    border-radius: 3px;
    align-items: center;
  }
  .paymentForm {
    width: 90%;
    padding: 4px 10px;
    border-bottom: 2px solid ${({ theme }) => theme.text_color};
    h4 {
      font-size: 17px;
      font-weight: 500;
    }
    h3 {
      padding: 0 15px;
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
    margin-top: 15px;
    width: 95%;
    h4 {
      font-size: 19px;
      font-weight: 500;
    }
    h3 {
      font-size: 22px;
      font-weight: 600;
    }
  }
  button {
    background-color: ${({ theme }) => theme.text_color};
    width: 250px;
    height: 60px;
    margin: 15px 0;
    border: unset;
    border-radius: 30px;
    font-size: 22px;
    font-weight: 600;
    transition: all 0.2s;
    :hover {
      box-shadow: 0 0 3px ${({ theme }) => theme.text_color};
    }
  }
`;
