import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  .container_footer {
    width: 100%;
    max-width: 1400px;
    height: 60px;
    padding: 5px 30px;
    margin: auto;
    margin-top: 20px;
    border-top: 2px solid ${({ theme }) => theme.text_color};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-family: "Genos", sans-serif;
    font-size: 27px;
    font-weight: 500;
  }
  a {
    color: ${({ theme }) => theme.text_color};
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 17px;
    font-weight: 500;
    svg {
      width: 25px;
    }
    :hover {
      opacity: 0.7;
    }
  }
`;
