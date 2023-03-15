import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.background_base};
  width: 100%;
  .container_header {
    width: 100%;
    max-width: 1450px;
    height: 70px;
    padding: 0 15px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .Brand {
    font-family: "Genos", sans-serif;
    margin: auto 0;
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
      h3 {
        font-size: 40px;
        font-weight: 600;
      }
      h4 {
        font-size: 38px;
        font-weight: 400;
      }
    .short_brand {
      display: none;
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    h4 {
      position: relative;
      padding: 5px;
      margin: 0px 10px;
      font-size: 19px;
      font-weight: 500;
    }
  }
  @media (max-width: 540px) {
    .container_header {
      padding: 10px;
      height: unset;
    }
    .Brand {
      h3 {
        font-size: 37px;
        font-weight: 600;
      }
      h4 {
        font-size: 35px;
        font-weight: 400;
      }
    }
    .right {
      h4 {
        padding: 4px;
        margin: 0px 7px;
        font-size: 17px;
      }
    }
  }
  @media (max-width: 370px) {
    .Brand {
    a {
      gap: 7px;
      h3 {
        font-size: 45px;
        font-weight: 600;
      }
      h4 {
        font-size: 40px;
        font-weight: 400;
      }
    }
    .entire_brand{
      display: none;
    }
    .short_brand {
      display: block;
    }
  }
  }
`;
