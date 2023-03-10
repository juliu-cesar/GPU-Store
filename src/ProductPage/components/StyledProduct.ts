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
  .container_description {
    width: 100%;
  }
  @media (max-width: 670px) {
    .container_price {
      display: flex;
      flex-direction: column;
      padding: 10px 20px;
    }
  }
`;
