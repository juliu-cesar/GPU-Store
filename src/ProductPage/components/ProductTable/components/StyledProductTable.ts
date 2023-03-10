import styled from "styled-components";

export const StyledProductTable = styled.div`
  position: relative;
  width: 100%;
  .frame_table {
    padding: 30px 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.off_white};
    }
    th,
    td {
      padding: 20px 5px;
    }
    th {
      width: 250px;
      font-size: 15px;
      font-weight: 400;
    }
    td {
      font-size: 17px;
      font-weight: 600;
    }
  }
  .package_content{
    width: 100%;
    margin-top: 20px;
    padding: 0 10px;
    h4{
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    li{
      margin-left: 20px;
    }
  }

  @media (max-width: 670px) {
    table {
      th {
        width: 180px;
        font-size: 14px;
        font-weight: 400;
      }
      td {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;
