import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../styles/CSSReset";

const theme = {
    color1: "#00D6E6",

    background_base: "#101010",
    semi_black: "#333",
    gray: "#7e7e7e",
    off_white: "#c9c9c9",
    text_color: "#fff",
};
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
