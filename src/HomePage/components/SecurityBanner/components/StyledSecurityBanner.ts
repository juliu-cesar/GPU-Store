import styled from "styled-components";

export const StyledSecurityBanner = styled.div`
  background-color: ${({ theme }) => theme.text_color};
  width: 100%;
  max-width: 1300px;
  height: 100px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  img {
    width: 17%;
    max-width: 170px;
  }
  @media (max-width: 770px) {
    img {
      width: 20%;
    }
  }
  @media (max-width: 770px) {
    height: 80px;
    img {
      width: 20%;
    }
  }
`;
