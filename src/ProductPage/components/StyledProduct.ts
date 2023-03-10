import styled from "styled-components";

export const StyledProduct = styled.div`
  width: 100%;
  .Container_productPage{
    width: 100%;
    max-width: 1400px;
    margin: auto;
  }
  .container_price{
    padding: 10px 16px;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 15px;
  }
  @media (max-width: 670px) {
    .container_price{
      display: flex;
      flex-direction: column;
      padding: 10px 20px;
    }
  }
`