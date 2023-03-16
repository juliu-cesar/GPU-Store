import { ChangeEvent } from "react";

interface Props {
  Filters: {
    title: string;
    id: string;
    options: {
      label: string;
      id: string;
      value: string | number[] | boolean;
    }[];
  };
  chooseFilter: (
    el: ChangeEvent<HTMLInputElement>,
    id: string,
    value: string | number[] | boolean | null
  ) => void;
}
export default function CheckBoxOption({ Filters, chooseFilter }: Props) {
  return (
    <div className="container_checkBoxOption flex_column" id={Filters.id}>
      <h3>{Filters.title}</h3>
      {Filters.options.map((e, index) => {
        return (
          <div className="frame_checkBoxOption" key={index}>
            <label htmlFor={e.id}>
              <input
                type="checkbox"
                name={e.id}
                id={e.id}
                onChange={(eC) =>
                  chooseFilter(
                    eC,
                    Filters.id,
                    eC.target.checked ? e.value : null
                  )
                }
              />
              <span className="checkbox"></span>
              {e.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
