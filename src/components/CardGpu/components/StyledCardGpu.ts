import styled from "styled-components";

export const StyledCardGpu = styled.section`
  width: 100%;
  .cardGpu {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.semi_black};
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      color: ${({ theme }) => theme.text_color};
      :hover .frame_content h4 {
        text-decoration: underline;
      }
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
    text-align: left;
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
  .add_cart {
    background-color: unset;
    border: 3px solid ${({ theme }) => theme.color1};
    color: white;
    width: 90%;
    min-height: 40px;
    margin: 16px auto;
    padding: 5px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.2s ease-out;
    :hover {
      background-color: ${({ theme }) => theme.color1};
    }
  }
`;
