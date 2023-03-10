import styled from "styled-components";

export const StyledProductDescription = styled.div`
  width: 100%;

  .container_description{
    width: 100%;
    max-width: 1400px;
    margin: auto;
  }
  .header{
    background-color: ${({ theme }) => theme.text_color};
    color: ${({ theme }) => theme.background_base};
    width: 100%;
    height: 70px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
      font-size: 27px;
    }
  }
`