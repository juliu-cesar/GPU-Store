import styled from "styled-components";

export const StyledSearchHeader = styled.div`
  width: 100%;
  padding-left: 280px;
  .container_searchHeader {
    height: 65px;
    margin-top: 15px;
    border-bottom: 2px solid ${({ theme }) => theme.text_color};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .order {
    padding: 5px 15px;
    gap: 15px;
  }
  .dropdown {
    position: relative;
    cursor: pointer;
    background-color: ${({ theme }) => theme.semi_black};
    width: 200px;
    height: 40px;
    padding: 5px 10px;
    border-radius: 2px;
    h4 {
      font-size: 15px;
      font-weight: 600;
    }
  }
  .dropdown_menu {
    position: absolute;
    z-index: 100;
    background-color: ${({ theme }) => theme.semi_black};
    top: -50px;
    left: 0;
    width: 200px;
    height: 170px;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: 0.25s normal showDropdown;
    .dropdown_item {
      cursor: pointer;
      padding: 7px;
      border-bottom: 1px solid ${({ theme }) => theme.gray};
      font-size: 17px;
      font-weight: 500;
      transition: all 0.15s;
      :hover {
        border-color: ${({ theme }) => theme.text_color};
      }
    }
  }
  .dropdown_cover {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .search {
    position: relative;
    margin-right: 15px;
    width: 100%;
    max-width: 800px;
    input {
      background-color: ${({ theme }) => theme.semi_black};
      color: ${({ theme }) => theme.text_color};
      border: unset;
      width: 100%;
      height: 40px;
      padding-left: 5px;
      border-radius: 2px;
      ::placeholder {
        color: ${({ theme }) => theme.gray};
      }
    }
    button {
      position: absolute;
      background-color: ${({ theme }) => theme.semi_black};
      border: unset;
      top: calc(50% - 18px);
      right: 5px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @keyframes showDropdown {
    0% {
      height: 0px;
    }
    100% {
      height: 170px;
    }
  }
  @media (max-width: 970px) {
    .order h3 {
      display: none;
    }
  }
  @media (max-width: 770px) {
    padding-left: unset;
    .order {
      padding: 5px 10px;
      h3 {
        display: none;
      }
    }
    .search {
      padding: 5px;
      margin-right: 15px;
    }
  }
  @media (max-width: 540px) {
    padding-left: unset;
    .dropdown {
      width: 160px;
      padding: 5px;
    }
  }
  @media (max-width: 370px) {
    .container_searchHeader{
      height: 110px;
      margin-top: 5px;
      flex-direction: column;
      justify-content: center;
    }
    .order{
      width: 100%;
      display: flex;
      justify-content: end;
    }
    .dropdown {
      width: 100%;
      padding: 5px 10px;
    }
    .dropdown_menu{
      width: 100%;
      left: unset;
      right: 0;
    }
    .search{
      margin: unset;
      padding: 5px 10px;
      button{
        right: 10px;
      }
    }
  }
`;
