import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyledFilter } from "./components/StyledFilter";
import GPUCard from "@/GPUCard.json";
import { TAllCards } from "@/src/components/TAllCards";
import SliderOption from "./components/SliderOption";
import CheckBoxSection from "./components/CheckBoxSection";

interface Props {
  setAllCards: Dispatch<SetStateAction<TAllCards | undefined>>;
  sortCards: (gpuCard: TAllCards, order: string) => TAllCards;
  selectedOrder: string;
}
export default function Filter({
  setAllCards,
  sortCards,
  selectedOrder,
}: Props) {
  const [price, setPrice] = useState([0, 20000]);
  const [filterBrand, setFilterBrand] = useState<string | null>(null);
  const [filterMemory, setFilterMemory] = useState<number[] | null>(null);
  const [filterRay, setFilterRay] = useState<boolean | null>(null);
  const [filterCover, setFilterCover] = useState(false);
  const [showClearFilters, setShowClearFilters] = useState(false);

  useEffect(() => {
    if (
      filterBrand != null ||
      filterMemory != null ||
      filterRay != null ||
      price[0] != 0 ||
      price[1] != 20000 ||
      showClearFilters
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setFilterCover(true);
      setShowClearFilters(true);
    }
    let timer: string | number | NodeJS.Timeout | undefined = setTimeout(() => {
      filterCards();
      setFilterCover(false);
    }, 600);
    return () => {
      clearInterval(timer);
      timer = undefined;
    };
  }, [filterBrand, filterMemory, filterRay, price]);

  function filterCards() {
    if (!GPUCard.gpuList) return;
    let newArr = GPUCard.gpuList;

    if (filterBrand) {
      newArr = newArr.filter((el) => el.brand == filterBrand);
    }
    if (filterMemory) {
      newArr = newArr.filter(
        (el) => el.memory >= filterMemory[0] && el.memory <= filterMemory[1]
      );
    }
    if (filterRay != null) {
      if (filterRay) {
        newArr = newArr.filter((el) => el.ray == true);
      }
      if (!filterRay) {
        newArr = newArr.filter((el) => el.ray == false);
      }
    }
    newArr = newArr.filter(
      (el) => el.price >= price[0] && el.price <= price[1]
    );
    setAllCards(sortCards(newArr, selectedOrder));
  }
  function clearFilters() {
    const filters = document.querySelectorAll(`.frame_checkBoxOption`);

    for (let x = 0; x < filters.length; x++) {
      (filters[x].children[0].children[0] as HTMLInputElement).checked = false;
    }
    setFilterCover(true);
    setPrice([0, 20000]);
    setFilterBrand(null);
    setFilterMemory(null);
    setFilterRay(null);
    setShowClearFilters(false);
  }

  const [showFilterSection, setShowFilterSection] = useState(false);

  function openFilterSection(boo: boolean) {
    const section = document.querySelector(".container_filter") as HTMLElement;
    section.style.left = boo ? "5px" : "-195px";
    setShowFilterSection(boo);
  }
  return (
    <StyledFilter>
      <div className="container_filter">
        {showClearFilters && (
          <div className="clear_filter">
            Limpar Filtro{" "}
            <button onClick={clearFilters}>
              <img src="img/icons/svg/close.svg" style={{ maxWidth: "30px" }} />
            </button>
          </div>
        )}
        <SliderOption price={price} setPrice={setPrice} />
        <CheckBoxSection
          setFilterBrand={setFilterBrand}
          setFilterMemory={setFilterMemory}
          setFilterRay={setFilterRay}
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
      {filterCover && (
        <span className="filter_delay">
          <div className="spin"></div>
        </span>
      )}
      {showFilterSection && (
        <span
          className="filterSection_cover"
          onClick={() => openFilterSection(false)}
        ></span>
      )}
    </StyledFilter>
  );
}
