import styled from "styled-components";

export const StyledCarouselHome = styled.div`
  position: relative;
  width: 100vw;
  .container_carousel {
    width: 100%;
    max-width: 1300px;
    min-width: 300px;
    padding: 30px 0;
    margin: auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  }
  .frame_carousel {
    background-color: ${({ theme }) => theme.background_white};
    width: 100%;
    overflow: hidden;
  }
  .carousel_home {
    width: calc(100% * 2);
    display: flex;
    flex-direction: row;
    transition: all 0.6s ease-in-out;
  }
  .card_carousel {
    position: relative;
    width: calc(100% / 2);
    height: 550px;
  }
  .frame_title {
    position: absolute;
    z-index: 10;
    color: ${({ theme }) => theme.background_base};
    top: 30px;
    left: 40px;
    h2 {
      font-size: 28px;
      font-weight: 700;
    }
    h3 {
      font-size: 19px;
      font-weight: 500;
      margin: 10px 15px;
    }
  }
  .frame_img {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      width: 80%;
      max-width: 900px;
      max-height: 540px;
      right: 50px;
      bottom: 5px;
    }
  }
  .backgroundBar {
    position: absolute;
    z-index: -1;
    background-color: ${({ theme }) => theme.background_white};
    width: 100vw;
    height: 350px;
    top: 130px;
    left: 0;
    filter: blur(2px);
  }
  @media (max-width: 920px) {
    .card_carousel {
      height: 520px;
    }
    .frame_img {
      img {
        bottom: 20px;
      }
    }
    .backgroundBar {
      display: none;
    }
  }
  @media (max-width: 820px) {
    .card_carousel {
      height: 480px;
    }
    .frame_img {
      img {
        bottom: 10px;
      }
    }
  }
  @media (max-width: 720px) {
    .card_carousel {
      height: 420px;
    }
    .frame_img {
      img {
        bottom: 5px;
      }
    }
  }
  @media (max-width: 620px) {
    .card_carousel {
      height: 380px;
    }
    .frame_img {
      img {
        right: 20px;
        bottom: 5px;
      }
    }
  }
  .frame_title {
    top: 25px;
    left: 30px;
    h2 {
      font-size: 26px;
    }
    h3 {
      font-size: 17px;
    }
  }
  @media (max-width: 520px) {
    .frame_img {
      img {
        right: 20px;
        bottom: 5px;
        width: 85%;
      }
    }
    .card_carousel {
      height: 320px;
      :nth-child(2) {
        .frame_img img {
          right: 20px;
          bottom: 5px;
          width: 80%;
        }
      }
    }
  }
  .frame_title {
    top: 25px;
    left: 30px;
    h2 {
      font-size: 26px;
    }
    h3 {
      font-size: 17px;
    }
  }
  @media (max-width: 420px) {
    .container_carousel{
      padding: 10px 0;
    }
    .frame_img {
      img {
        right: 5px;
        bottom: 10px;
        width: 95%;
      }
    }
    .card_carousel {
      height: 300px;
      :nth-child(2) {
        .frame_img img {
          width: 85%;
        }
      }
    }
  }
  .frame_title {
    top: 20px;
    left: 10px;
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 15px;
    }
  }
`;
