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
  .filter_cover{
    position: fixed;
    z-index: 200;
    background-color: rgba(0,0,0,0.4);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: .3s normal slowOpacity;
    .spin{
      width: 80px;
      height: 80px;
      opacity: .8;
      border: 10px inset white;
      border-radius: 50%;
      animation: 1.3s infinite spin;
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
