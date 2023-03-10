import styled from "styled-components";

export const StyledProductPrice = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  .frame_title {
    width: 100%;
    h2 {
      font-size: 24px;
      font-weight: 600;
    }
    ul {
      padding: 10px 20px;
      li {
        margin: 10px 0;
      }
    }
  }
  .frame_price {
    h3 {
      font-size: 27px;
      font-weight: 600;
    }
    p {
      font-size: 12px;
      line-height: 14px;
    }
    .cash_price {
      margin-bottom: 20px;
    }
    .installment_price {
      margin-bottom: 20px;
      opacity: 0.7;
      h3 {
        font-size: 19px;
      }
    }
  }
  .buttons {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
    .buy {
      background-color: ${({ theme }) => theme.color1};
      width: 150px;
      height: 44px;
      border: unset;
      border-radius: 22px;
      font-size: 19px;
      font-weight: 600;
      :hover {
        color: ${({ theme }) => theme.text_color};
      }
    }
    .add_cart {
      background-color: unset;
      color: ${({ theme }) => theme.text_color};
      width: 150px;
      height: 44px;
      border: 2px solid ${({ theme }) => theme.text_color};
      border-radius: 22px;
      font-size: 19px;
      font-weight: 600;
      :hover {
        border-color: ${({ theme }) => theme.color1};
      }
    }
  }
  @media (max-width: 920px) {
    .frame_title {
      h2 {
        font-size: 22px;
      }
    }
    .frame_price {
      h3 {
        font-size: 24px;
      }
    }
  }
`;
