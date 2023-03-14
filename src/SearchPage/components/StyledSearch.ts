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
      /* margin-top: 15px; */
      margin-right: 20px;
    }
  }
  .searched_itens{
    width: 100%;
    height: 50px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h4{
      background-color: ${({ theme }) => theme.semi_black};
      padding: 8px 20px;
      font-size: 17px;
      font-weight: 500;
      border-radius: 5px;
      .small{
        font-size: 15px;
        font-weight: 400;        
      }
    }
    button{
      background-color: ${({ theme }) => theme.semi_black};
      width: 35px;
      height: 35px;
      padding: 10px;
      margin-right: 20px;
      border: unset;
      border-radius: 50%;
      transition: all .15s;
      img{
        width: 100%;
      }
      :hover{
        opacity: 0.75;
      }
    }
  }
`;
