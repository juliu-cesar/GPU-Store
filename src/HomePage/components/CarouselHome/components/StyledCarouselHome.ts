import styled from "styled-components";

export const StyledCarouselHome = styled.div`
position: relative;
  width: 100vw;
  .container_carousel{
    width: 100%;
    max-width: 1300px;
    padding: 30px 0;
    margin: auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  }
  .frame_carousel{
    background-color: ${({ theme }) => theme.background_white};
    width: 100%;
    overflow: hidden;
  }
  .carousel_home{
    width: calc(100% * 2);
    display: flex;
    flex-direction: row;
    transition: all .6s ease-in-out;
  }
  .card_carousel{
    position: relative;
    width: calc(100% / 2);
    height: 550px;
  }
  .frame_title{
    position: absolute;
    z-index: 10;
    color: ${({ theme }) => theme.background_base};
    top: 30px;
    left: 40px;
    h2{
      font-size: 28px;
      font-weight: 700;
    }
    h3{
      font-size: 19px;
      font-weight: 500;
      margin: 10px 15px;
    }
  }
  .frame_img{
    position: relative;
    width: 100%;
    height: 100%;
    img{
      position: absolute;
      width: 80%;
      max-width: 900px;
      max-height: 540px;
      right: 50px;
      bottom: 5px;
    }
  }
  .backgroundBar{
    position: absolute;
    z-index: -1;
    background-color: ${({ theme }) => theme.background_white};
    width: 100vw;
    height: 350px;
    top: 130px;
    left: 0;
    filter: blur(2px);
  }
`