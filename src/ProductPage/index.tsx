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
import LoadPage from "./components/LoadPage";
import ApiLink from "@/ApiLinks.json";
import NotFound from "./components/NotFound";

interface Props {
  router: NextRouter;
}
export default function ProductPage({ router }: Props) {
  const [Product, setProduct] = useState<TProduct | undefined>();
  const [loadPage, setLoadPage] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [ID, setID] = useState("");
  const URLGetById = ApiLink.getProductById;

  useEffect(() => {
    let id = router.query.params?.slice(-20);
    if (!id) return
    setID(id as string);
    fetch(`${URLGetById + id}.json`)
      .then((response) => response.json())
      .then((data: TProduct) => {
        if (data != null) {
          if (data.textList) {
            setProduct(data);
            setLoadPage(false);
          } else {
            setNotFound(true);
          }
        } else {
          setNotFound(true);
        }
      });
  }, [router.query]);

  return (
    <StyledProduct>
      <Header cartType={0} />
      {notFound ? (
        <NotFound />
      ) : (
        <>
          {loadPage ? (
            <LoadPage />
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
        </>
      )}
      <Footer />
    </StyledProduct>
  );
}
