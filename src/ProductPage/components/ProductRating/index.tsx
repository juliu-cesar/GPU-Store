import { Rate } from "antd";
import { useEffect, useState } from "react";
import HeaderProductPage from "../HeaderProductPage";
import ProductInfoLayout from "../ProductInfoLayout";
import { StyledProductRating } from "./components/StyledProductRating";

export default function ProductRating({ rate }: { rate: number | undefined }) {
  const [rating, setRating] = useState<number | undefined>(0);
  useEffect(() => {
    setRating(rate);
  }, [rate]);
  return (
    <StyledProductRating>
      <ProductInfoLayout>
        <HeaderProductPage>
          <h1>Avaliações do produto</h1>
        </HeaderProductPage>
        <div className="frame_rating">
          <div className="rating">
            <Rate disabled allowHalf value={3.5} />
          </div>
          <p>0 comentários</p>
        </div>
      </ProductInfoLayout>
    </StyledProductRating>
  );
}
