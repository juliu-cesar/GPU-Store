import { StyledProductList } from "./components/StyledProductList";
import GPUCard from "@/GPUCard.json";
import CardGpu from "@/src/components/CardGpu";

export default function ProductList() {
  return (
    <StyledProductList>
      <div className="container_product">
        {GPUCard.gpuList && (
          <CardGpu allCards={GPUCard.gpuList} onlyCash={false} />
        )}
      </div>
    </StyledProductList>
  );
}
