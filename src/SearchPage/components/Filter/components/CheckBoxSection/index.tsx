import CheckBoxOption from "./components/CheckBoxOption";
import { StyledCheckBoxSection } from "./components/StyledCheckBoxSection";
import allFilters from "@/allFilters.json";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  setFilterBrand: Dispatch<SetStateAction<string | null>>;
  setFilterMemory: Dispatch<SetStateAction<number[] | null>>;
  setFilterRay: Dispatch<SetStateAction<boolean | null>>;
}
export default function CheckBoxSection({
  setFilterBrand,
  setFilterMemory,
  setFilterRay,
}: Props) {
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
    <StyledCheckBoxSection>
      <CheckBoxOption
        Filters={allFilters.filterBrand}
        chooseFilter={chooseFilter}
      />
      <CheckBoxOption
        Filters={allFilters.filterMemory}
        chooseFilter={chooseFilter}
      />
      <CheckBoxOption
        Filters={allFilters.filterRay}
        chooseFilter={chooseFilter}
      />
    </StyledCheckBoxSection>
  );
}
