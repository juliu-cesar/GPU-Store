import { StyledProductList } from "./components/StyledProductList";
import CardGpu from "@/src/components/CardGpu";
import { TGpuCard } from "@/src/components/TGpuCard";

export default function ProductList({
  allCards,
}: {
  allCards: TGpuCard | undefined;
}) {
  return (
    <StyledProductList>
      <div className="container_product">
        {allCards && <CardGpu allCards={allCards} onlyCash={false} />}
      </div>
    </StyledProductList>
  );
}
