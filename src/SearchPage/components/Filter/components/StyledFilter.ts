import styled from "styled-components";

export const StyledFilter = styled.div`
  margin-top: 40px;
  .container_filter {
    z-index: 50;
    background-color: rgba(21,21,21,0.95);
    width: 235px;
    padding: 5px 10px;
    border-right: 2px solid ${({ theme }) => theme.text_color};
    box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    transition: all .25s ease-in-out;
  }
  .clear_filter{
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 10px;
    button{
      width: 30px;
      min-width: 30px;
      height: 30px;
      min-height: 30px;
      background-color: ${({ theme }) => theme.semi_black};
      color: ${({ theme }) => theme.text_color};
      padding: 8px;
      border: unset;
      border-radius: 50%;
    }
    img{
      width: 100%;
    }
  }
  .small_screen{
    position: absolute;
    display: none;
    background-color: ${({ theme }) => theme.background_base};
    top: 0;
    right: -53px;
    width: 45px;
    height: 45px;
    padding: 5px;
    border: unset;
    border: 2px solid ${({ theme }) => theme.text_color};
    box-shadow: 2px 2px 10px rgba(0,0,0,0.35);
    border-radius: 5px;
    img{
      width: 100%;
    }
  }
  h3 {
    margin: 10px 0;
  }   
  .filter_delay{
    position: fixed;
    z-index: 200;
    background-color: rgba(0,0,0,0.4);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: .3s normal slowOpacity;
    .spin{
      width: 80px;
      height: 80px;
      opacity: .8;
      border: 10px inset white;
      border-radius: 50%;
      animation: 1.3s infinite spin;
    }
  }
  .filterSection_cover{
    position: fixed;
    z-index: 49;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  @media (max-width: 670px) {
    .container_filter{
      width: 190px;
    }
  }
  @media (max-width: 600px) {
    .container_filter{
      position: absolute;
      top: 190px;
      left: -195px;
      width: 200px;
    }
    .small_screen{
      display: block;
    }
  }
  @media (max-width: 370px) {
    .container_filter{
      top: 220px;
    }
  }
`;
