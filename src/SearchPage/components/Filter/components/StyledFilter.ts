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
  .frame_options {
    position: relative;
    margin-bottom: 10px;
    label {
      cursor: pointer;
      vertical-align: middle;
    }
    .checkbox {
      float: left;
      width: 20px;
      height: 20px;
      margin-right: 10px;
      border: 1.5px solid ${({ theme }) => theme.text_color};
      border-radius: 1px;
    }
    input {
      cursor: pointer;
      position: absolute;
      height: 0;
      width: 0;
      opacity: 0;
    }
    .checkbox:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 7px;
      width: 5px;
      height: 10px;
      opacity: 0;
      border: solid ${({ theme }) => theme.text_color};
      border-width: 0 2.5px 2.5px 0;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transition: all 0.15s;
    }
    input:checked ~ .checkbox:after {
      opacity: 1;
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
