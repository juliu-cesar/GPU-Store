import styled from "styled-components";

export const StyledSearchedBoards = styled.div`
  width: 100%;
  .container_Searched {
    width: 100%;
    max-width: 1300px;
    padding: 20px;
    margin: auto;
  }
  h4 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .frame_boards section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: 840px) {
    .frame_boards {
      section {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    .cardGpu:nth-last-child(1) {
      display: none;
    }
  }
  @media (max-width: 640px) {
    .frame_boards {
      section {
        grid-template-columns: 1fr 1fr;
      }
    }
    .cardGpu:nth-last-child(1) {
      display: block;
    }
  }
  @media (max-width: 440px) {
    .frame_boards {
      section {
        grid-template-columns: 1fr;
      }
    }
  }
`;
