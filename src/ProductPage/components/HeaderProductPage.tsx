import styled from "styled-components";

const StyledHeaderProductPage = styled.div`
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
`;

export default function HeaderProductPage({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <StyledHeaderProductPage>
      <div className="header">{children}</div>
    </StyledHeaderProductPage>
  );
}
