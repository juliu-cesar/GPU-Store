import styled from "styled-components";

export const StyledSearch = styled.div`
  width: 100%;
  .container {
    width: 100%;
    max-width: 1500px;
    margin: auto;
  }
  #filter_products {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 15px;
    .product_and_search {
      width: 100%;
      margin-right: 20px;
    }
  }
  @keyframes spin {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  @keyframes slowOpacity {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`;
