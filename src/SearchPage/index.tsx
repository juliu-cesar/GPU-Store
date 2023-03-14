import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import SearchHeader from "./components/SearchHeader";
import GPUCard from "@/GPUCard.json";
import { StyledSearch } from "./components/StyledSearch";
import { TGpuCard } from "../HomePage/components/TGpuCard";

export default function SearchPage() {
  const [allCards, setAllCards] = useState<TGpuCard | undefined>(undefined);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setAllCards(GPUCard.gpuList);
  }, [GPUCard]);

  function searchItens() {
    if(!GPUCard.gpuList)return
    let newArr = GPUCard.gpuList.filter((e)=>{
      return e.title.toLowerCase().includes(search.toLowerCase())
    })
    setAllCards(newArr)
  }
  return (
    <StyledSearch>
      <Header cartType={0} />
      <div className="container">
        <SearchHeader search={search} setSearch={setSearch} searchItens={searchItens} />
        <div id="filter_products">
          <Filter />
          <ProductList allCards={allCards} />
        </div>
      </div>
      <Footer />
    </StyledSearch>
  );
}
