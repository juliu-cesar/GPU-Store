import styled from "styled-components";

export const StyledHover = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.text_color};
    bottom: -2px;
    left: 50%;
    width: 0px;
    height: 2px;
    transition: all 0.15s ease-in-out;
  }
  :hover {
    ::after {
      width: 100%;
      left: calc(50% - 100% / 2);
    }
  }
`