import styled from "styled-components";

export const StyledBoardsByBrand = styled.div`
  width: 100%;
  .container_brand {
    width: 100%;
    max-width: 1300px;
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .banner_brand {
    position: relative;
    width: 55%;
    max-width: 500px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    div {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.4s ease-in-out;
      img {
        width: 100%;
      }
    }
    .frame_amd {
      background: rgb(237, 27, 36);
      background: linear-gradient(
        35deg,
        rgba(237, 27, 36, 0.65) 0%,
        rgba(237, 27, 36, 1) 50%,
        rgba(237, 27, 36, 1) 100%
      );
    }
    .frame_nvidia {
      background: rgb(118, 185, 0);
      background: linear-gradient(
        50deg,
        rgba(118, 185, 0, 0.7) 0%,
        rgba(118, 185, 0, 1) 50%,
        rgba(118, 185, 0, 1) 100%
      );
      opacity: 0;
    }
  }
  .frame_boards {
    width: 45%;
    section:first-child{
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 15px;
    }
  }
  .cardGpu {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.text_color};
    border-radius: 10px;
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
    height: 180px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    overflow: hidden;
    img {
      width: 100%;
      max-height: 180px;
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
  @media (max-width: 970px) {
    .banner_brand {
      width: 50%;
      height: 250px;
    }
    .frame_boards {
      width: 50%;
    }
  }
  @media (max-width: 770px) {
    .banner_brand {
      width: 40%;
      height: 200px;
    }
    .frame_boards {
      width: 60%;
    }
  }
  @media (max-width: 640px) {
    .container_brand {
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 15px;
    }
    .banner_brand {
      width: 100%;
      height: 130px;
      max-width: unset;
      div img {
        width: 70%;
      }
    }
    .frame_boards {
      width: 100%;
    }
  }
  @media (max-width: 440px) {
    .banner_brand {
      height: 120px;
      div img {
        width: 80%;
      }
    }
  }
`;
