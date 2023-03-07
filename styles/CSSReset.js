import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
		background-color: ${({ theme }) => theme.background_base};
		color: ${({ theme }) => theme.text_color};
    font-family: 'Montserrat', sans-serif;
    width: 100vw;
    overflow-x: hidden;
  }
  /* NextJS */
  #__next {
    width: 100%;
    min-width: 300px;
  }
  /* Globals */
  button,
  a {
    cursor: pointer;
    text-decoration: none;
    opacity: 1;
    transition: all .4s;
  }
  .icon{
    width: 20px;
    height: 20px;
  }
  .flex_row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
  }
`;
