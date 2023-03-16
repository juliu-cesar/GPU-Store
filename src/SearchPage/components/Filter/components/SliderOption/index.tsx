import { Slider } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyledSlider } from "./components/StyledSlider";

interface Props {
  price: number[];
  setPrice: Dispatch<SetStateAction<number[]>>;
}
export default function SliderOption({ price, setPrice }: Props) {
  const [elPrice, setElPrice] = useState([price[0], price[1]]);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined = setTimeout(() => {
      setPrice([elPrice[0], elPrice[1]]);
    }, 600);
    return () => {
      clearInterval(timer);
      timer = undefined;
    };
  }, [elPrice]);
  return (
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
          defaultValue={[elPrice[0], elPrice[1]]}
          onChange={(num) => setElPrice([num[0], num[1]])}
          max={20000}
        />
      </StyledSlider>
    </div>
  );
}
