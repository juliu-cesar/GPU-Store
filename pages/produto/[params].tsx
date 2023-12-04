import ProductPage from "@/src/ProductPage";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Params() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>GPU Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/icons/logo-icon.ico" />
      </Head>
      <ProductPage router={router} />
    </>
  );
}
