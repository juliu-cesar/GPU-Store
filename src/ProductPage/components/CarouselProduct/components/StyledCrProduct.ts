import styled from "styled-components";

export const StyledCrProduct = styled.div<{
  imgNum: number;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  .frame_carousel_img{
    position: relative;
    background-color: ${({ theme }) => theme.text_color};
    width: 100%;
    height: 320px;
    border-radius: 15px;    
    overflow: hidden;
    .prev_img, .next_img{
      cursor: pointer;
      z-index: 10;
      position: absolute;
      top: 0;
      width: 35px;
      height: 100%;
      transition: all .3s;
      :hover{
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .next_img{
      right: 0;
    }
  }
  .carousel_img {
    position: absolute;
    top:10%;
    left: 0;
    width: calc(100% * ${({ imgNum }) => imgNum});
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all .4s ease-in-out;
    img {
      width: calc(100% / ${({ imgNum }) => imgNum});
    }
  }
  .container_cards {
    width: 70px;
    min-width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.35s;
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
      transition: all .3s;
    }
    button {
      background-color: ${({ theme }) => theme.text_color};
      width: 60px;
      height: 60px;
      padding: 3px;
      border: unset;
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
  .arrow_back,
  .arrow_front {
    cursor: pointer;
    background-color: ${({ theme }) => theme.text_color};
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
    padding-left: 7px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    transform: rotate(90deg);
    img {
      width: 90%;
    }
  }
  .arrow_back {
    transform: rotate(-90deg);
  }
`;
