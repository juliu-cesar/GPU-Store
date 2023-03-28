import styled from "styled-components";

export const StyledCardGpu = styled.section`
  width: 100%;
  .cardGpu {
    cursor: pointer;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.semi_black};
    overflow: hidden;
    :hover .frame_content h4 {
      text-decoration: underline;
    }
    a {
      color: ${({ theme }) => theme.text_color};
    }
  }
  .frame_img {
    background-color: ${({ theme }) => theme.text_color};
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      width: 90%;
      max-height: 200px;
      object-fit: contain;
    }
  }
  .frame_content {
    padding: 5px 10px;
    color: ${({ theme }) => theme.text_color_y};
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
      color: ${({ theme }) => theme.text_color_y};
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
`;
