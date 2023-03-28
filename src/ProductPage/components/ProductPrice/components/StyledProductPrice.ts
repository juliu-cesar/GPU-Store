import styled from "styled-components";

export const StyledProductPrice = styled.div`
  width: 100%;
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
      color: ${({ theme }) => theme.color1};
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
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      width: 250px;
      height: 55px;
      border-radius: 27px;
      transition: all .2s ease-out;
    }
    .add_cart {
      background-color: ${({ theme }) => theme.color1};
      /* color: ${({ theme }) => theme.text_color}; */
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
