import styled from "styled-components";

const StyledProductInfoLayout = styled.div`
  background-color: ${({ theme }) => theme.background_base};
  width: 100%;
  max-width: 1300px;
  padding-top: 30px;
  margin: auto;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
`;
const BackgroundBar = styled.span`
  position: absolute;
  z-index: -10;
  background-color: ${({ theme }) => theme.text_color};
  filter: blur(2px);
  top: 10px;
  left: 0;
  width: 100vw;
  height: 120px;
`;
export default function ProductInfoLayout({
  children,
}: {
  children: JSX.Element[];
}) {
  return (
    <>
      <BackgroundBar />
      <StyledProductInfoLayout>{children}</StyledProductInfoLayout>
    </>
  );
}
