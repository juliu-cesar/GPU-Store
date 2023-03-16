import styled from "styled-components";

export const StyledCheckBoxSection = styled.div`
  width: 100%;
  .frame_checkBoxOption {
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
`