import styled from "styled-components";

export const StyledBoardsByBrand = styled.div`
  width: 100%;
  .container_brand {
    width: 100%;
    max-width: 1300px;
    padding: 20px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    gap: 15px;
  }
  .banner_brand {
    position: relative;
    width: 100%;
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
    width: 100%;
    section:first-child{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
  }
  @media (max-width: 840px) {
    .container_brand{
      grid-template-columns: 1fr 1.2fr;
    }
    .banner_brand {
      height: 250px;
    }
  }
  @media (max-width: 770px) {
    .banner_brand {
      height: 200px;
    }
  }
  @media (max-width: 640px) {
    .container_brand {
      width: 100%;
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
  @media (max-width: 440px) {
    .banner_brand div img {
        width: 90%;      
    }
    .frame_boards section:first-child{
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
    }
  
  }
`;
