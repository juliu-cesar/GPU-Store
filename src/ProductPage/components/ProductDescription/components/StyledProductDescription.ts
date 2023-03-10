import styled from "styled-components";

export const StyledProductDescription = styled.div`
  position: relative;
  width: 100%;
  .container_description {
    background-color: ${({ theme }) => theme.background_base};
    width: 100%;
    height: 300px;
    max-width: 1300px;
    padding-top: 30px;
    margin: auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
  }
  .header {
    background-color: ${({ theme }) => theme.text_color};
    color: ${({ theme }) => theme.background_base};
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 27px;
    }
  }
  .frame_description {
    width: 100%;
    padding: 30px 20px;
  }
  .description_card {
    width: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    .text_description{
      padding: 10px;      
    }
    h3 {
      font-size: 19px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    h4 {
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
    }
    img {
      width: 50%;
      border-radius: 10px;
    }
  }
  .reverse{
    flex-direction: row-reverse;
    
  }
  .center_description {
    width: 100%;
    padding: 10px;
    margin: auto;
    margin-top: 30px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.text_color};
    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  .background_bar {
    position: absolute;
    z-index: -10;
    background-color: ${({ theme }) => theme.text_color};
    filter: blur(2px);
    top: 10px;
    left: 0;
    width: 100vw;
    height: 120px;
  }
  @media (max-width: 770px) {
    .description_card {
      h3 {
        font-size: 17px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      h4 {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 15px;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
      }
    }
  }
  @media (max-width: 670px) {
    .description_card {
    width: 95%;
    padding: 10px;
    margin: auto;
    flex-direction: column;
    img{
      width: 90%;
    }
    }
  }
`;
