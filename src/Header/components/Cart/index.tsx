import { StyledHover } from "@/src/components/StyledHover";
import styled from "styled-components";

const StyledCart = styled.div<{
  type: number;
}>`
  position: relative;
  cursor: pointer;
  height: 50px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: ${({ type }) => `${type}px`} solid ${({ theme }) => theme.text_color};
  border-radius: 10px;
  h3 {
    font-weight: 500;
    margin-right: 10px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 19px;
    font-weight: 500;
  }
  @media (max-width: 540px) {
    h3 {
      display: none;
    }
  }
`;

interface Props {
  type: number;
}
export default function Cart({ type }: Props) {
  return (
    <StyledCart type={type}>
      <StyledHover>
        {type == 1 && <h3>Carrinho</h3>}
        <div>
          <img
            src="../img/icons/cart-icon.png"
            alt="ícone carrinho de compras"
            style={{ width: "18px" }}
          />{" "}
          0
        </div>
      </StyledHover>
    </StyledCart>
  );
}
