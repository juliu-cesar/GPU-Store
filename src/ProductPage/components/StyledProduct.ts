import styled from "styled-components";

export const StyledProduct = styled.div`
  width: 100%;
  .container_price {
    background-color: ${({ theme }) => theme.background_base};
    width: 100%;
    max-width: 1300px;
    padding: 10px 16px;
    margin: auto;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    align-items: center;
    gap: 15px;
  }
  .container_404 {
    width: 100%;
    max-width: 1300px;
    padding: 10px 16px;
    margin: auto;
    flex-direction: column;
    img {
      width: 80%;
    }
    a {
      background-color: unset;
      color: ${({ theme }) => theme.text_color};
      width: 250px;
      height: 45px;
      border-radius: 22px;
      border: 2px solid ${({ theme }) => theme.text_color};
      font-size: 20px;
      font-weight: 500;
      :hover {
        background-color: ${({ theme }) => theme.text_color};
        color: ${({ theme }) => theme.background_base};
      }
    }
  }
  @media (max-width: 770px) {
    .container_price {
      display: flex;
      flex-direction: column;
      padding: 10px 20px;
    }
  }
  @media (max-width: 470px) {
    .container_price {
      padding: 10px;
    }
  }
`;
