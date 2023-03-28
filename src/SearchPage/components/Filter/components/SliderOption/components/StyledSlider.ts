import styled from "styled-components";

export const StyledSlider = styled.div`
  .ant-slider {
    :hover .ant-slider-track {
      background-color: #00D6E6;
      box-shadow: 0 0 4px #00D6E6;
      opacity: 1;
    }
    .ant-slider-rail {
    }
    .ant-slider-track {
      background-color: #00D6E6;
      opacity: 0.9;
      transition: opacity 0.2s;
      transition: box-shadow 0.2s;
    }
    .ant-slider-handle {
      ::after {
        box-shadow: 0 0 0 2px rgba(0, 214, 230, 0.8);
      }
      :hover::after {
        box-shadow: 0 0 0 4px ${({ theme }) => theme.color1};
      }
      :focus::after {
        box-shadow: 0 0 0 4px ${({ theme }) => theme.color1};
      }
    }
  }
`;
