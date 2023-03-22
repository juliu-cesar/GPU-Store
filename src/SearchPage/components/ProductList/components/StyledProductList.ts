import styled from "styled-components";

export const StyledProductList = styled.div`
  width: 100%;
  margin-top: 15px;
  .container_product section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
  }
  .searched_itens {
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    overflow: hidden;
    .Text{
      background-color: ${({ theme }) => theme.semi_black};
      max-height: 100px;
      padding: 8px 20px;
      border-radius: 5px;
      h4 {
        font-size: 17px;
        font-weight: 500;
        .small {
          font-size: 15px;
          font-weight: 400;
        }
      }
    }
    button {
      background-color: ${({ theme }) => theme.semi_black};
      width: 35px;
      min-width: 35px;
      height: 35px;
      min-height: 35px;
      padding: 10px;
      border: unset;
      border-radius: 50%;
      transition: all 0.15s;
      img {
        width: 100%;
      }
      :hover {
        opacity: 0.75;
      }
    }
  }
  @media (max-width: 1400px) {
    .container_product section {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media (max-width: 1150px) {
    .container_product section {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 920px) {
    .container_product section {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 600px) {
    .container_product section {
      padding-left: 20px;
    }
    .searched_itens {
      padding-left: 40px;      
    }
  }
  @media (max-width: 470px) {
    .container_product section {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 370px) {
    .searched_itens {
      .Text {
        padding: 8px 10px;
        h4{
          font-size: 16px;
        }
        .small {
          font-size: 14px;
        }
      }
    }
  }
`;
