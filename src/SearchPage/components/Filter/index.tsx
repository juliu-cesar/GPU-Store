import { Slider } from "antd";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import FilterSection from "./components/FilterSection";
import { StyledFilter } from "./components/StyledFilter";
import { StyledSlider } from "./components/StyledSlider";
import allFilters from "@/allFilters.json"

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
  const [elPrice, setElPrice] = useState([price[0], price[1]]);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined = setTimeout(() => {
      setPrice([elPrice[0], elPrice[1]]);
    }, 1000);
    return () => {
      clearInterval(timer);
      timer = undefined;
    };
  }, [elPrice]);
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
            <p>{elPrice[0]}</p>
            <p>{elPrice[1]}</p>
          </div>
          <StyledSlider>
            <Slider
              range
              step={100}
              defaultValue={[price[0], price[1]]}
              onChange={(num) => setElPrice([num[0], num[1]])}
              max={20000}
            />
          </StyledSlider>
        </div>
        <FilterSection
          Filters={allFilters.allFilters.filterBrand}
          chooseFilter={chooseFilter}
        />
        <FilterSection
          Filters={allFilters.allFilters.filterMemory}
          chooseFilter={chooseFilter}
        />
        <FilterSection
          Filters={allFilters.allFilters.filterRay}
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
