import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  .container {
    width: 100%;
    max-width: 1600px;
    height: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .Logo {
    font-family: "Genos", sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    .GPU {
      font-size: 40px;
      font-weight: 600;
    }
    .Store {
      font-size: 38px;
      font-weight: 400;
    }
  }
  .right{
    a{
      position: relative;
      color: ${({ theme }) => theme.text_color};
      padding: 5px;
      margin: 0px 10px;
      font-size: 19px;
      font-weight: 500;
      ::after{
        content: "";
        position: absolute;
        background-color: ${({ theme }) => theme.text_color};
        bottom: 0px;
        left: 50%;
        width: 0px;
        height: 2px;
        transition: all .15s ease-in-out;
      }
      :hover{
        ::after{
          width: 100%;
          left: calc(50% - 100% / 2);
        }
      }
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;
