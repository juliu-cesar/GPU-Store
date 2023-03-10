import { StyledProductDescription } from "./components/StyledProductDescription";

export default function ProductDescription(){

  return(
    <StyledProductDescription>
      <span className="background_bar"></span>
      <div className="container_description">
        <div className="header">
          <h1>Detalhes do produto</h1>
        </div>
      </div>
    </StyledProductDescription>
  )
}