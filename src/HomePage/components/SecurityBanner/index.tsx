import { StyledSecurityBanner } from "./components/StyledSecurityBanner";

export default function SecurityBanner() {
  return (
    <StyledSecurityBanner>
      <div className="container_securityBanner">
        <div className="banner">
          <div className="card_banner">
            <img
              src="img/icons/banner-compra-segura.png"
              alt="Ícone compra segura"
            />
            <h4>
              <span className="bold">Compra 100% segura</span>
            </h4>
          </div>
          <div className="card_banner">
            <img
              src="img/icons/banner-entrega-rapida.png"
              alt="Ícone entrega rápida"
            />
            <h4>
              <span className="bold">Entrega rápida</span>
            </h4>
          </div>
          <div className="card_banner">
            <img
              src="img/icons/banner-melhor-segmento.png"
              alt="Ícone melhor do segmento"
            />
            <h4>
              <span className="bold">Melhor do Segmento</span> <br />
              pelo 2º ano consecutivo
            </h4>
          </div>
        </div>
      </div>
      <span className="blur_bar"></span>
    </StyledSecurityBanner>
  );
}
