import styled from "styled-components";

export const StyledFilter = styled.div`
  margin-top: 40px;
  .container_filter {
    border-right: 2px solid ${({ theme }) => theme.text_color};
    width: 235px;
    padding: 5px 10px;
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
    span {
      float: left;
      width: 25px;
      height: 25px;
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
      top: 3px;
      left: 9px;
      width: 5px;
      height: 12px;
      opacity: 0;
      border: solid ${({ theme }) => theme.text_color};
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transition: all 0.1s;
    }
    input:checked ~ .checkbox:after {
      opacity: 1;
    }
  }
  @media (max-width: 670px) {
    .container_filter{
      width: 190px;
    }
  }
`;
