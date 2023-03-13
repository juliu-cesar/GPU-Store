import styled from "styled-components";

export const StyledProductList = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-right: 20px;
  .container_product section:first-child {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 10px;
  }
  @media (max-width: 1400px) {
    .container_product section:first-child {
      grid-template-columns: auto auto auto auto;
    }
  }
  @media (max-width: 1150px) {
    .container_product section:first-child {
      grid-template-columns: auto auto auto;
    }
  }
  @media (max-width: 920px) {
    .container_product section:first-child {
      grid-template-columns: auto auto;
    }
  }
  @media (max-width: 600px) {
    .container_product section:first-child {
      grid-template-columns: auto;
    }
  }
`;
