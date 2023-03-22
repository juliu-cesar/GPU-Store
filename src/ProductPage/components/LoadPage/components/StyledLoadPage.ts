import styled from "styled-components";

export const StyledLoadPage = styled.div`
   width: 100%;
  .container_cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .frame_icons {
    width: 70px;
    min-width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.35s;
    .arrow_back,
    .arrow_front {
      background-color: ${({ theme }) => theme.text_color};
      width: 40px;
      min-width: 40px;
      height: 40px;
      min-height: 40px;
      padding-left: 7px;
      border-radius: 50%;
      display: flex;
      align-items: center;
    }
  }
  .frame_carousel_card {
    position: relative;
    width: 100%;
    height: 275px;
    border-radius: 5px;
    overflow: hidden;
  }
  .carousel_card {
    position: absolute;
    top: 0px;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: all 0.3s;
    .img_icon {
      background-color: ${({ theme }) => theme.text_color};
      width: 60px;
      height: 60px;
      padding: 3px;
      border: unset;
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
    }
  }
  .frame_carousel_img {
    position: relative;
    background-color: ${({ theme }) => theme.text_color};
    width: 100%;
    height: 450px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    overflow: hidden;
    .prev_img,
    .next_img {
      cursor: pointer;
      z-index: 10;
      position: absolute;
      top: 0;
      width: 35px;
      height: 100%;
      transition: all 0.3s;
      :hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
      img {
        position: absolute;
        top: calc(50% - 10px);
        left: 5px;
        transform: rotate(180deg);
      }
    }
    .next_img {
      right: 0;
      transform: rotate(180deg);
    }
  }
  .carousel_img {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.4s ease-in-out;
    img {
      width: 100%;
      max-height: 450px;
      object-fit: contain;
    }
  }
  @media (max-width: 920px) {
    .frame_carousel_img {
      height: 400px;
    }
    .carousel_img img {
      max-height: 400px;
    }
  }
  @media (max-width: 770px) {
    .frame_carousel_img {
      height: 450px;
    }
    .carousel_img img {
      max-height: 450px;
    }
  }
  @media (max-width: 670px) {
    .frame_carousel_img {
      height: 400px;
    }
    .carousel_img img {
      max-height: 400px;
    }
  }
  @media (max-width: 370px) {
    .frame_carousel_img {
      height: 350px;
    }
    .carousel_img img {
      max-height: 350px;
    }
    .frame_icons {
      display: none;
    }
  }
`;
