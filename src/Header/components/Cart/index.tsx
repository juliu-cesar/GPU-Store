import styled from "styled-components";

const StyledCart1 = styled.div`
position: relative;
  cursor: pointer;
  width: 150px;
  height: 50px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text_color};
  border-radius: 10px;
  transition: all .25s;
  h3 {
    font-weight: 500;
  }
  div {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 19px;
    font-weight: 500;
  }
  ::after{
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.text_color};
      bottom: 8px;
      left: 50%;
      width: 0px;
      height: 2px;
      transition: all .15s ease-in-out;
    }
    :hover{
      ::after{
        width: 90%;
        left: calc(50% - 90% / 2);
      }
    }
  /* :hover {
    background-color: #333;
  } */
`;

const StyledCart2 = styled.div`
  cursor: pointer;
  padding: 7px;
  border-radius: 10px;
  transition: outline 0.15s;
  div {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 19px;
    font-weight: 500;
  }
  :hover {
    outline: 1px solid ${({ theme }) => theme.text_color};
  }
`;

interface Props {
  type: number;
}
export default function Cart({ type }: Props) {
  return (
    <>
      {type == 0 ? (
        <StyledCart1>
          <h3>Carrinho</h3>
          <div>
            <img
              src="img/icons/icone-cart.png"
              alt="ícone carrinho de compras"
              style={{ width: "18px" }}
            />{" "}
            0
          </div>
        </StyledCart1>
      ) : (
        <StyledCart2>
          <div>
            <img
              src="img/icons/icone-cart.png"
              alt="ícone carrinho de compras"
              style={{ width: "18px" }}
            />{" "}
            0
          </div>
        </StyledCart2>
      )}
    </>
  );
}
