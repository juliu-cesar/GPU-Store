import Search from "@/src/Search";
import Head from "next/head";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>GPU Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/icons/logo-icon.ico" />
      </Head>
      <Search />
    </>
  );
}
