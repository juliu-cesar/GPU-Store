import { Slider } from "antd";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { TFilter } from "../TFilter";
import FilterSection from "./components/FilterSection";
import { StyledFilter } from "./components/StyledFilter";
import { StyledSlider } from "./components/StyledSlider";

const allFilters = {
  filterBrand: {
    title: "Marca",
    id: "filterBrand",
    options: [
      { label: "AMD", id: "AMD", value: "amd" },
      { label: "NVIDIA", id: "NVIDIA", value: "nvidia" },
    ],
  },
  filterMemory: {
    title: "Memória",
    id: "filterMemory",
    options: [
      { label: "Até 4 GB", id: "memory_1", value: [0, 4] },
      { label: "4 a 8 GB", id: "memory_2", value: [4, 8] },
      { label: "8 a 12 GB", id: "memory_3", value: [8, 12] },
      { label: "Acima de 12 GB", id: "memory_4", value: [12, 100] },
    ],
  },
  filterRay: {
    title: "Traçados de raio",
    id: "filterRay",
    options: [
      { label: "Sim", id: "ray_on", value: true },
      { label: "Não", id: "ray_off", value: false },
    ],
  },
};

interface Props {
  price: number[];
  setPrice: Dispatch<SetStateAction<number[]>>;
  setFilterBrand: Dispatch<SetStateAction<string | null>>;
  setFilterMemory: Dispatch<SetStateAction<number[] | null>>;
  setFilterRay: Dispatch<SetStateAction<boolean | null>>;
}
export default function Filter({
  price,
  setPrice,
  setFilterBrand,
  setFilterMemory,
  setFilterRay,
}: Props) {
  const [showFilterSection, setShowFilterSection] = useState(false);

  function setSlider(num: number[]) {
    setPrice([num[0], num[1]]);
  }
  function openFilterSection(boo: boolean) {
    const section = document.querySelector(".container_filter") as HTMLElement;
    section.style.left = boo ? "5px" : "-195px";
    setShowFilterSection(boo);
  }
  function chooseFilter(
    el: ChangeEvent<HTMLInputElement>,
    id: string,
    value: string | number[] | boolean | null
  ) {
    clearPrevAndSelect(el, id);

    if (id == "filterBrand") {
      setFilterBrand(value as string | null);
    }
    if (id == "filterMemory") {
      setFilterMemory(value as number[] | null);
    }
    if (id == "filterRay") {
      setFilterRay(value as boolean | null);
    }
  }
  function clearPrevAndSelect(el: ChangeEvent<HTMLInputElement>, id: string) {
    const filters = document.querySelector(`#${id}`) as HTMLElement;
    const children = filters.children;
    let target = el.target.checked;

    if (!target) {
      el.target.checked = false;
      return;
    }
    for (let x = 1; x < children.length; x++) {
      (children[x].children[0].children[0] as HTMLInputElement).checked = false;
    }
    el.target.checked = true;
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
              max={20000}
            />
          </StyledSlider>
        </div>
        <FilterSection
          Filters={allFilters.filterBrand}
          chooseFilter={chooseFilter}
        />
        <FilterSection
          Filters={allFilters.filterMemory}
          chooseFilter={chooseFilter}
        />
        <FilterSection
          Filters={allFilters.filterRay}
          chooseFilter={chooseFilter}
        />
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
      {showFilterSection && (
        <span
          className="filterSection_cover"
          onClick={() => openFilterSection(false)}
        ></span>
      )}
    </StyledFilter>
  );
}
