import styled from "styled-components";

export const StyledSearchedBoards = styled.div`
  width: 100%;
  .container_Searched{
    width: 100%;
    max-width: 1300px;
    padding: 20px;
    margin: auto;
    h4{
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 20px;
    }
  }
  .frame_boards{
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
  }
  .container_cardGpu {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.text_color};
    border-radius: 10px;
    overflow: hidden;
    :hover .frame_content h4 {
      text-decoration: underline;
    }
    a{
      color: ${({ theme }) => theme.text_color};
    }
  }
  .frame_img {
    background-color: ${({ theme }) => theme.text_color};
    width: 100%;
    height: 170px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .frame_content {
    padding: 5px 10px;
    h4 {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 17px;
      font-weight: 600;
    }
    span {
      color: ${({ theme }) => theme.off_white};
      h3 {
        margin-top: 10px;
      }
    }
  }

  .color1 {
    color: ${({ theme }) => theme.color1};
  }
  .small {
    font-size: 13px;
    font-weight: 400;
  }
  .small2 {
    font-size: 12px;
    font-weight: 300;
  }
`