import styled from "styled-components";

export const StyledProductRating = styled.div`
  position: relative;
  width: 100%;
  .frame_rating {
    width: 100%;
    padding: 30px 20px;
    text-align: center;
    p{
      margin-top: 15px;
    }
  }
  .rating {
    margin: auto;
    .ant-rate-star-half {
      .ant-rate-star-second {
        svg {
          fill: ${({ theme }) => theme.semi_black};
        }
      }
    }
    .ant-rate-star-zero {
      svg {
        fill: ${({ theme }) => theme.semi_black};
      }
    }
  }
`;
