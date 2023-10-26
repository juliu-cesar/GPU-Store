import CartProvider from "@/src/Header/components/CartSection/components/CartProvider";
import CardsProvider from "@/src/components/CardsProvider";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../styles/CSSReset";

const theme = {
  color1: "#49d907",

  body: "#000",
  background_base: "#151515",
  background_white: "#E5E5E5",
  semi_black: "#333",
  gray: "#7e7e7e",
  off_white: "#c9c9c9",
  text_color: "#fff",
  text_color_y: "#cecbbc",
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderWrapper>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </ProviderWrapper>
  );
}

function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CardsProvider>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <CartProvider>{children}</CartProvider>
    </CardsProvider>
  );
}