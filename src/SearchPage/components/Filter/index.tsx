import { Slider } from "antd";
import { useState } from "react";
import { StyledFilter } from "./components/StyledFilter";
import { StyledSlider } from "./components/StyledSlider";

const filters = [
  {
    title: "Marca",
    options: [
      { label: "AMD", id: "AMD" },
      { label: "NVIDIA", id: "NVIDIA" },
    ],
  },
  {
    title: "Memória",
    options: [
      { label: "Até 4 GB", id: "memory_1" },
      { label: "4 a 8 GB", id: "memory_2" },
      { label: "8 a 12 GB", id: "memory_3" },
      { label: "Acima de 12 GB", id: "memory_4" },
    ],
  },
  {
    title: "Traçados de raio",
    options: [
      { label: "Sim", id: "ray_on" },
      { label: "Não", id: "ray_off" },
    ],
  },
];

export default function Filter() {
  const [price, setPrice] = useState([0, 15000]);
  const [showFilterSection, setShowFilterSection] = useState(false);

  function setSlider(num: number[]) {
    setPrice([num[0], num[1]]);
  }
  function openFilterSection(boo: boolean) {
    const section = document.querySelector(".container_filter") as HTMLElement;
    section.style.left = boo ? "5px" : "-195px";
    setShowFilterSection(boo);
  }
  return (
    <StyledFilter>
      <div className="container_filter">
        <div className="Price">
          <h3>Preço</h3>
          <div className="flex_row">
            <p>{price[0]}</p>
            <p>{price[1]}</p>
          </div>
          <StyledSlider>
            <Slider
              range
              step={100}
              defaultValue={[price[0], price[1]]}
              onChange={setSlider}
              max={15000}
            />
          </StyledSlider>
        </div>
        {filters.map((e, i) => {
          return (
            <div className="container_options flex_column" key={i}>
              <h3>{e.title}</h3>
              {e.options.map((e, index) => {
                return (
                  <div className="frame_options" key={index}>
                    <label htmlFor={e.id}>
                      <input type="checkbox" name={e.id} id={e.id} />
                      <span className="checkbox"></span>
                      {e.label}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
        <button
          className="small_screen"
          onClick={() => openFilterSection(true)}
        >
          <img
            src="img/icons/svg/filter-slider.svg"
            alt="ícone abrir seção filtro"
          />
        </button>
      </div>
      {showFilterSection && <span className="filterSection_cover" onClick={()=>openFilterSection(false)}></span>}
    </StyledFilter>
  );
}
