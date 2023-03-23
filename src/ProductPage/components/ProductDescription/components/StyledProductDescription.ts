import styled from "styled-components";

export const StyledProductDescription = styled.div`
  position: relative;
  width: 100%;
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
    .text_description {
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
  .reverse {
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
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
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
      width: 100%;
      border-radius: 10px;
    }
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
    .center_description {
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
      img {
        width: 90%;
      }
    }
  }
`;
