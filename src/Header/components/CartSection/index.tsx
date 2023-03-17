import { Dispatch, SetStateAction } from "react";
import { StyledCartSection } from "./components/StyledCartSection";

const Mock = [
  {
    id: "ywtlguhtgn",
    title:
      "RTX 3070 MSI Ventus 3X Plus NVIDIANVIDIANVIDIANVIDIA GeForce, 8GB GDDR6",
    img: "img/nvidia/rtx-4080.png",
    brand: "nvidia",
    memory: 8,
    ray: true,
    price: 4375.49,
    rating: 4.2,
    relevance: 7.5,
  },
  {
    id: "zj5u0db7qk",
    title:
      "GTX 1050 Ti Asus NVIDIA GeForce OC Cerberus, 4GB GDDR5 Asus NVIDIA GeForce OC Cerberus, 4GB GDDR5 Asus NVIDIA GeForce OC Cerberus, 4GB GDDR5",
    img: "img/nvidia/rtx-4080.png",
    brand: "nvidia",
    memory: 4,
    ray: false,
    price: 1459.68,
    rating: 4.2,
    relevance: 7.9,
  },
  {
    id: "ahaqqavpnu",
    title: "RX 6900 XT 16GB",
    img: "img/amd/rx-6000xt.png",
    brand: "amd",
    memory: 16,
    ray: true,
    price: 5598.87,
    rating: 4.4,
    relevance: 9.2,
  },
  {
    id: "ywtlguhtgn",
    title: "RTX 3070 MSI Ventus 3X Plus NVIDIA GeForce, 8GB GDDR6",
    img: "img/nvidia/rtx-4080.png",
    brand: "nvidia",
    memory: 8,
    ray: true,
    price: 4375.49,
    rating: 4.2,
    relevance: 7.5,
  },
  {
    id: "zj5u0db7qk",
    title:
      "GTX 1050 Ti Asus NVIDIA GeForce OC Cerberus, 4GB GDDR5 Asus NVIDIA GeForce OC Cerberus, 4GB GDDR5 Asus NVIDIA GeForce OC Cerberus, 4GB GDDR5",
    img: "img/nvidia/rtx-4080.png",
    brand: "nvidia",
    memory: 4,
    ray: false,
    price: 1459.68,
    rating: 4.2,
    relevance: 7.9,
  },
  {
    id: "ahaqqavpnu",
    title: "RX 6900 XT 16GB",
    img: "img/amd/rx-6000xt.png",
    brand: "amd",
    memory: 16,
    ray: true,
    price: 5598.87,
    rating: 4.4,
    relevance: 9.2,
  },
  {
    id: "ywtlguhtgn",
    title: "RTX 3070 MSI Ventus 3X Plus NVIDIA GeForce, 8GB GDDR6",
    img: "img/nvidia/rtx-4080.png",
    brand: "nvidia",
    memory: 8,
    ray: true,
    price: 4375.49,
    rating: 4.2,
    relevance: 7.5,
  },
  {
    id: "zj5u0db7qk",
    title:
      "GTX 1050 Ti Asus NVIDIA GeForce OC Cerberus, 4GB GDDR5 Asus NVIDIA GeForce OC Cerberus, 4GB GDDR5 Asus NVIDIA GeForce OC Cerberus, 4GB GDDR5",
    img: "img/nvidia/rtx-4080.png",
    brand: "nvidia",
    memory: 4,
    ray: false,
    price: 1459.68,
    rating: 4.2,
    relevance: 7.9,
  },
  {
    id: "ahaqqavpnu",
    title: "RX 6900 XT 16GB",
    img: "img/amd/rx-6000xt.png",
    brand: "amd",
    memory: 16,
    ray: true,
    price: 5598.87,
    rating: 4.4,
    relevance: 9.2,
  },
];

interface Props {
  showCart: boolean;
  showCartSection: boolean;
  setShowCartSection: Dispatch<SetStateAction<boolean>>;
}
export default function CartSection({
  showCart,
  showCartSection,
  setShowCartSection,
}: Props) {
  return (
    <StyledCartSection show={showCart ? "0" : "-551px"}>
      <div className="container_cartSection">
        <div className="frame_headerCart flex_row">
          <h3>Itens</h3>
          <h3>Quantidade</h3>
        </div>
        <div className="frame_itens flex_column">
          {Mock.map((el) => {
            const cashPrice = (el.price * 0.9).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
            return (
              <div className="CardItem">
                <div className="imgIcon align_center">
                  <img src={el.img} style={{ maxWidth: "150px" }} />
                </div>
                <div className="TitleAndPrice flex_column">
                  <h4>{el.title}</h4>
                  <h3>{cashPrice}</h3>
                </div>
                <div className="amount align_center">1</div>
              </div>
            );
          })}
        </div>
        <div className="frame_footerCart flex_column">
          <div className="paymentForm flex_row">
            <h4>Forma de pagamento</h4>
            <div className="flex_row">
              <h3>Pix</h3>
              <img
                src="img/icons/svg/pix-icon-only.svg"
                alt="ícone Pix"
                style={{ maxWidth: "50px" }}
              />
            </div>
          </div>
          <div className="totalPrice flex_row">
            <h4>Total:</h4>
            <h3>R$ 2789,65</h3>
          </div>
        </div>
        <button className="btn_buy">Finalizar Compra</button>
        <button className="btn_close" onClick={() => setShowCartSection(false)}>
          <img
            src="img/icons/svg/arrow-bold.svg"
            alt="ícone"
            style={{ maxWidth: "40px" }}
          />
        </button>
      </div>
      {showCartSection && (
        <span
          className="cart_cover"
          onClick={() => setShowCartSection(false)}
        ></span>
      )}
    </StyledCartSection>
  );
}
