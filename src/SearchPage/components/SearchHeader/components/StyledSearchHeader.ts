import styled from "styled-components";

export const StyledSearchHeader = styled.div`
  width: 100%;
  padding-left: 280px;
  .container_searchHeader {
    height: 65px;
    margin-top: 15px;
    border-bottom: 2px solid ${({ theme }) => theme.text_color};
    justify-content: space-around;
  }
  .order {
    padding: 5px 15px;
    gap: 15px;
    h3 {
      width: 100px;
      font-size: 15px;
      font-weight: 500;
    }
  }
  .dropdown {
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
  .search {
    position: relative;
    padding: 5px 15px;
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
      background-color: unset;
      border: unset;
      top: calc(50% - 18px);
      right: 18px;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
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
      height: 40px;
      padding: 5px;
      border-radius: 2px;
    }
  }
`;
