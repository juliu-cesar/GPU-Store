import { StyledProductDescription } from "./components/StyledProductDescription";

interface Props {
  description:
    | {
        class: string;
        infoTitle?: string;
        infoSubtitle?: string;
        text?: string;
        imgUrl?: string;
      }[]
    | undefined;
}
export default function ProductDescription({ description }: Props) {
  return (
    <StyledProductDescription>
      <span className="background_bar"></span>
      <div className="container_description">
        <div className="header">
          <h1>Detalhes do produto</h1>
        </div>
        <div className="frame_description">
          {description &&
            description.map((el, i) => {
              return (
                <div className={el.class} key={i}>
                  <div className="text_description">
                    {el.infoTitle && <h3>{el.infoTitle}</h3>}
                    {el.infoSubtitle && <h4>{el.infoSubtitle}</h4>}
                    {el.text && <p>{el.text}</p>}
                  </div>
                  {el.imgUrl && <img src={el.imgUrl} alt="imagem descrição" />}
                </div>
              );
            })}
        </div>
      </div>
    </StyledProductDescription>
  );
}
