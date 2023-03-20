import { NextRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledProduct } from "./components/StyledProduct";
import Header from "../Header";
import product from "@/product.json";
import { IProduct } from "./components/IProduct";
import ProductCarousel from "./components/ProductCarousel";
import ProductPrice from "./components/ProductPrice";
import ProductDescription from "./components/ProductDescription";
import ProductTable from "./components/ProductTable";
import ProductRating from "./components/ProductRating";
import Footer from "../Footer";
import Link from "next/link";

interface Props {
  router: NextRouter;
}
export default function ProductPage({ router }: Props) {
  const [Product, setProduct] = useState<IProduct | undefined>();
  const [ID, setID] = useState("");

  useEffect(() => {
    let id = router.query.params?.slice(-10);
    setID(id as string);
    setProduct(product[id as keyof typeof product]);
  }, [router.query]);
  return (
    <StyledProduct>
      {!Product ? (
        <>
          <Header cartType={0} />
          <div className="container_404 align_center">
            <img
              src="../img/icons/svg/404-not-found.svg"
              alt="Pagina não encontrada"
              style={{ maxWidth: "700px" }}
            />
          <Link className="align_center" href={"/"}>Voltar à pagina inicial</Link>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Header cartType={0} />
          <div className="container_price">
            <ProductCarousel imgList={Product!.imgList} />
            <ProductPrice textList={Product!.textList} ID={ID} />
          </div>
          <div className="container_description">
            <ProductDescription description={Product!.description} />
          </div>
          <div className="container_table">
            <ProductTable
              infoTable={Product!.info_table}
              packageContent={Product!.package_content}
            />
          </div>
          <div className="container_rating">
            <ProductRating rate={Product!.rating} />
          </div>
          <Footer />
        </>
      )}
    </StyledProduct>
  );
}
