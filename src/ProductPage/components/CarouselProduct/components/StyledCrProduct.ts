import styled from "styled-components";

export const StyledCrProduct = styled.div<{
  imgNum: number;
}>`
  position: relative;
  background-color: ${({ theme }) => theme.text_color};
  width: 100%;
  height: 370px;
  border-radius: 15px;
  overflow: hidden;
  .carousel_img {
    position: absolute;
    top: calc(50% - 100% / 2.5);
    width: calc(100% * ${({ imgNum }) => imgNum});
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: calc(100% / ${({ imgNum }) => imgNum});
    }
  }
  .frame_cards {
    position: absolute;
    background-color: rgba(70,70,70,0.7);
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px 5px;
    opacity: .6;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: opacity .2s;
    :hover{
      opacity: 1;
    }
    .frame_carousel_card{
      overflow: hidden;
      width: 100%;
      max-width: 300px;
    }
    .carousel_card {
      width: calc(25% * ${({ imgNum }) => imgNum});
      display: flex;
      flex-direction: row;
      gap: 10px;
      span {
        cursor: pointer;
        background-color: rgba(255,255,255,.5);
        border-radius: 10px;
        width: 25%;
        padding: 3px;
        transition: background-color .25s;
        :hover{
          background-color: rgba(255,255,255,1);
        }
        img {
          width: 100%;
        }
      }
    }
  }
  .arrow_back,
  .arrow_front {
    cursor: pointer;
    background-color: rgba(255,255,255,.6);
    width: 40px;
    min-width: 40px;
    height: 40px;
    padding-left: 7px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    transition: background-color .25s;
    :hover{
      background-color: rgba(255,255,255,1);
    }
    img {
      /* width: 35px; */
      width: 90%;
    }
  }
  .arrow_back {
    transform: rotate(180deg);
  }
`;
