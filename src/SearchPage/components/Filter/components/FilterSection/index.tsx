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
    value: string | number[] | boolean | undefined
  ) => void;
}
export default function FilterSection({ Filters, chooseFilter }: Props) {
  return (
    <div>
      <div className="container_options flex_column" id={Filters.id}>
        <h3>{Filters.title}</h3>
        {Filters.options.map((e, index) => {
          return (
            <div className="frame_options" key={index}>
              <label htmlFor={e.id}>
                <input
                  type="checkbox"
                  name={e.id}
                  id={e.id}
                  onChange={(eC) =>
                    chooseFilter(
                      eC,
                      Filters.id,
                      eC.target.checked ? e.value : undefined
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
    </div>
  );
}
