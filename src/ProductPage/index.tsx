import { NextRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledProduct } from "./components/StyledProduct";
import Header from "../Header";
import { TProduct } from "./components/TProduct";
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
  const [Product, setProduct] = useState<TProduct | undefined>();
  const [ID, setID] = useState("");

  useEffect(() => {
    let id = router.query.params?.slice(-20);
    setID(id as string);
    fetch(
      `https://gpu-store-test-default-rtdb.firebaseio.com/produtos/${id}.json`
    )
      .then((response) => response.json())
      .then((data: TProduct) => {
        setProduct(data);
      });
  }, [router.query]);
  return (
    <StyledProduct>
      <Header cartType={0} />
      {!Product ? (
        <>
          <div className="container_404 align_center">
            <img
              src="../img/icons/svg/404-not-found.svg"
              alt="Pagina não encontrada"
              style={{ maxWidth: "700px" }}
            />
            <Link className="align_center" href={"/"}>
              Voltar à pagina inicial
            </Link>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
      <Footer />
    </StyledProduct>
  );
}
