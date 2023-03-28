import styled from "styled-components";

export const StyledSecurityBanner = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin: 20px 0;
  .container_securityBanner {
    background-color: ${({ theme }) => theme.background_base};
    width: 100vw;
    max-width: 1300px;
    margin: auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
  }
  .banner {
    background-color: ${({ theme }) => theme.text_color};
    width: 100%;
    height: 150px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
  }
  .card_banner{
    color: ${({ theme }) => theme.background_base};
    height: 100%;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-items: center;
    gap: 5px;
    img{
      width: 90px;
    }
    h4{
      font-size: 17px;
      padding: 5px;
      font-weight: 500;
      .bold{
        font-weight: 700;
      }
    }
  }
  img {
    width: 17%;
    max-width: 170px;
  }
  .blur_bar {
    z-index: -1;
    position: absolute;
    background-color: ${({ theme }) => theme.text_color};
    top: 20px;
    left: 0;
    width: 100vw;
    height: 110px;
    filter: blur(2px);
    display: block;
  }
  @media (max-width: 640px) {
    .card_banner{
      grid-template-columns: auto;
      grid-template-rows: 1fr 1fr;
      h4{
        font-size: 14px;
      }
    }
  }
  @media (max-width: 510px) {
    .banner{
      height: 170px;
    }
    .card_banner{
      img{
        width: 80px;
      }
    }
  }
`;
